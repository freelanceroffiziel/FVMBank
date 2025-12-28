const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const { sendVerficationEmail } = require("../utils/utils.sendMails");

exports.createuser = async (req, res) => {
  const { fullName, email, password, role } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: `Missing fields required`,
    });
  }

  // Validate role if passed
  const validRoles = ["user", "admin"];
  const userRole = role && validRoles.includes(role) ? role : "user";

  const existingEmail = await userModel.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const salt = bcrypt.genSaltSync(Number(process.env.genSaltSync));
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const user = new userModel({
      fullName,
      email,
      password: hashedPassword,
      role: userRole,
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id, fullName: user.fullName },
      process.env.JWT_SECRET,
      { expiresIn: "30mins" }
    );
    if (!token) {
      return res.status(404).json({
        message: `Token not found`,
      });
    }

    const link = `http://${process.env.host}:${process.env.port}/api/v1/updateuserstatus?token=${token}`;
    const verifyUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/updateuserstatus?token=${token}`;
    sendVerficationEmail(user, verifyUrl);

    return res.status(201).json({
      message: `User with name ${fullName} is created successfully`,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        accountNumber: user.accountNumber,
        balance: user.balance,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: `Missing fields are required`,
      });
    }

    const CheckUser = await userModel.findOne({ email });
    if (!CheckUser) {
      return res.status(404).json({
        message: `User does not exists`,
      });
    }

    const isMatch = bcrypt.compareSync(password, CheckUser.password);
    if (!isMatch) {
      return res.status(400).json({
        message: `Invalid password`,
      });
    }

    const token = jwt.sign(
      {
        userId: CheckUser._id,
        role: CheckUser.role,
        fullName: CheckUser.fullName,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    if (!token) {
      return res.status(404).json({
        message: `Token not found`,
      });
    }

    return res.status(200).json({
      message: `Login successfull `,
      token,
      user: {
        id: CheckUser._id,
        fullName: CheckUser.fullName,
        email: CheckUser.email,
        accountNumber: CheckUser.accountNumber,
        balance: CheckUser.balance,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Internal server error",
    });
  }
};


