const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const MailHelper = require("../utils/MailHelper");
const Notification = require("../models/notification.model");
const Account = require("../models/account.model"); // ✅ IMPORTANT

// ================= CREATE USER =================
exports.createuser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    if (!firstName || !lastName || !email || !password)
      return res.status(400).json({ message: "Missing fields required" });

    const existingEmail = await userModel.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ message: "Email already exists" });

    const userRole = role && ["user", "admin"].includes(role) ? role : "user";

    const hashedPassword = bcrypt.hashSync(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = bcrypt.hashSync(otp, 10);

    const user = new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: userRole,
      otp: hashedOtp,
      otpExpires: Date.now() + 10 * 60 * 1000,
      isVerified: false,
    });

    await user.save();

    // ✅ CREATE ACCOUNTS
    await Account.create([
      {
        user: user._id,
        accountType: "personal",
        accountNumber: Math.floor(1000000000 + Math.random() * 9000000000),
        balance: 0,
      },
      {
        user: user._id,
        accountType: "business",
        accountNumber: Math.floor(1000000000 + Math.random() * 9000000000),
        balance: 0,
      },
    ]);

    await MailHelper.sendOtpEmail(email, otp);

    await Notification.create({
      user: user._id,
      message: "Account created. OTP sent to email for verification.",
      type: "user",
    });

    return res.status(201).json({
      message: "OTP sent to your email. Verify your account.",
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });
    if (user.otpExpires < Date.now())
      return res.status(400).json({ message: "OTP expired" });

    if (!bcrypt.compareSync(otp, user.otp))
      return res.status(400).json({ message: "Invalid OTP" });

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    await MailHelper.sendWelcomeEmail(user);

    // 🔔 Notification
    await Notification.create({
      user: user._id,
      message: "Account verified successfully",
      type: "user",
    });

    return res
      .status(200)
      .json({ message: "Verification successful. You can now login." });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = bcrypt.hashSync(otp, 10);

    user.otp = hashedOtp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    await MailHelper.sendOtpEmail(email, otp);

    // 🔔 Notification
    await Notification.create({
      user: user._id,
      message: "OTP resent successfully",
      type: "user",
    });

    return res.status(200).json({ message: "OTP resent successfully" });
  } catch (error) {
    console.error("Resend OTP error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Missing fields required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User does not exist" });

    if (!user.isVerified)
      return res.status(403).json({
        message: "Please verify your account before logging in",
      });

    if (!bcrypt.compareSync(password, user.password))
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        fullName: `${user.firstName} ${user.lastName}`,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    const accounts = await Account.find({ user: user._id });

    await Notification.create({
      user: user._id,
      message: "Logged in successfully",
      type: "user",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      accounts, // ✅ IMPORTANT
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
