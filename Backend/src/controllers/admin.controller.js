const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createAdmin = async (req, res) => {
  try {
    const { email, password, secretKey } = req.body;

    if (secretKey !== process.env.ADMIN_SECRET) {
      return res.status(403).json({ message: "Invalid secret key" });
    }

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await User.create({
      email,
      password: hashedPassword,
      role: "admin",
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= ADMIN LOGIN =================
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email });

    if (!admin || admin.role !== "admin") {
      return res.status(403).json({ message: "Not an admin account" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.status(200).json({
      message: "Admin login successful",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= GET ALL USERS =================
exports.adminGetAllUsers = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const users = await User.find().select("-password");

    res.status(200).json({
      count: users.length,
      users,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= GET USER BY ID =================
exports.adminGUserById = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= DELETE USER =================
exports.deleteUser = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= LOCK USER ACCOUNT =================
exports.lockUserAccount = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isLocked = true;
    await user.save();

    res.status(200).json({
      message: "User account locked",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= UNLOCK USER ACCOUNT =================
exports.unlockUserAccount = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isLocked = false;
    await user.save();

    res.status(200).json({
      message: "User account unlocked",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= ADMIN FORGOT PASSWORD =================
exports.adminForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const admin = await User.findOne({ email, role: "admin" });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const resetToken = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    // Normally send email here
    res.status(200).json({
      message: "Reset token generated",
      resetToken,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= ADMIN RESET PASSWORD =================
exports.adminResetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await User.findById(decoded.userId);

    if (!admin || admin.role !== "admin") {
      return res.status(400).json({ message: "Invalid token" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({
      message: "Admin password reset successful",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= RESET USER PASSWORD =================
exports.adminResetUserPassword = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { userId, newPassword } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({
      message: "User password reset successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
