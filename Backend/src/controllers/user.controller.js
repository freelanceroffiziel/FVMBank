const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const { sendVerficationEmail } = require("../utils/utils.sendMails");

// Helper to generate random account number
const generateAccountNumber = () => Math.floor(1000000000 + Math.random() * 9000000000).toString();

// Create new user
exports.createuser = async (req, res) => {
  try {
    // Map frontend keys to backend
    const { firstName: firstname, lastName: lastname, email, password, role } = req.body;

    // Validate required fields
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Missing fields required" });
    }

    // Check if email already exists
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Validate role
    const validRoles = ["user", "admin"];
    const userRole = role && validRoles.includes(role) ? role : "user";

    // Hash password
    const saltRounds = Number(process.env.genSaltSync) || 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create user
    const user = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: userRole,
      accountNumber: generateAccountNumber(),
    });

    await user.save();

    // JWT for verification
    const token = jwt.sign(
      { userId: user._id, fullName: `${firstname} ${lastname}` },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    // Send verification email
    const verifyUrl = `${req.protocol}://${req.get("host")}/api/v1/updateuserstatus?token=${token}`;
    sendVerficationEmail(user, verifyUrl);

    return res.status(201).json({
      message: `User ${firstname} ${lastname} created successfully`,
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        accountNumber: user.accountNumber,
        balance: user.balance,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// User login
exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing fields required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        fullName: `${user.firstname} ${user.lastname}`,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: `${user.firstname} ${user.lastname}`,
        email: user.email,
        accountNumber: user.accountNumber,
        balance: user.balance,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};