const Account = require("../models/account.model");
const userModel = require("../models/user.model");
const generateAccountNumber = require("../utils/utils.generateAccountNumber");
const { sendAccountCreationEmail } = require("../utils/utils.sendMails");
const bcrypt = require("bcryptjs");

exports.createaccount = async (req, res) => {
  try {
    const { accountType, initialBalance, transactionPin } = req.body;
    const userId = req.user.userId;

    if (!accountType || !initialBalance || !transactionPin) {
      return res.status(400).json({
        message: `Missing fields required`,
      });
    }

    if (!/^\d{6}$/.test(transactionPin)) {
      return res.status(400).json({
        message: "Transaction PIN must be exactly 6 numeric digits",
      });
    }

    const accountNumber = await generateAccountNumber();
    const hashedPin = await bcrypt.hash(transactionPin, 10);

    const account = new Account({
      user: userId,
      accountNumber,
      accountType,
      transactionPin: hashedPin,
      balance: initialBalance || 0,
    });

    await account.save();

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: `User not found`,
      });
    }

    await sendAccountCreationEmail(user, account);

    res.status(201).json({
      message: "Bank account created successfully",
      account,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create account",
      error: error.message,
    });
  }
};

exports.getaccountsbyuser = async (req, res) => {
  try {
    const { userId } = req.params;

    const accounts = await Account.find({ user: userId }).populate(
      "user",
      "fullName email"
    );
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getaccountbyId = async (req, res) => {
  try {
    const { id } = req.params;

    const account = await Account.findById(id).populate(
      "user",
      "fullName email"
    );
    if (!account) return res.status(404).json({ error: "Account not found" });

    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
