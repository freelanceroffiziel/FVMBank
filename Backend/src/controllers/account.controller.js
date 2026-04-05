const Account = require("../models/account.model");
const userModel = require("../models/user.model");
const MailHelper = require("../utils/MailHelper");
const generateAccountNumber = require("../utils/utils.generateAccountNumber");
const bcrypt = require("bcryptjs");

const Notification = require("../models/notification.model");

const recordHistory = require("../utils/historyHelper");

const generateIBAN = require("../utils/generateIban");
const generateSWIFT = require("../utils/generateSwift");

exports.createaccount = async (req, res) => {
  try {
    const { accountType, transactionPin } = req.body;
    const userId = req.user.userId;

    // Validation omitted for brevity...

    const existingAccount = await Account.findOne({
      user: userId,
      accountType,
    });
    if (existingAccount)
      return res
        .status(400)
        .json({ message: `You already have a ${accountType} account` });

    const accountNumber = await generateAccountNumber();
    const iban = await generateIBAN();
    const swiftCode = generateSWIFT();
    const hashedPin = await bcrypt.hash(transactionPin, 10);

    const account = new Account({
      user: userId,
      accountNumber,
      accountType,
      transactionPin: hashedPin,
      balance: 0,
      iban,
      swiftCode,
    });

    await account.save();

    // Send email, notification, history...
    const user = await userModel.findById(userId);
    if (user) await MailHelper.sendAccountCreationEmail(user, account);

    await Notification.create({
      user: userId,
      message: `${accountType} account created successfully`,
      type: "account",
    });

    await recordHistory({
      userId,
      accountId: account._id,
      type: "Create Account",
      message: `${accountType} account created successfully`,
      status: "Completed",
      iban: account.iban, // automatically generated IBAN
      swiftCode: account.swift, // automatically generated SWIFT
      accountType: account.accountType,
      accountNumber: account.accountNumber,
    });

    res.status(201).json({
      message: "Bank account created successfully",
      account,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create account", error: error.message });
  }
};

exports.getaccountsbyuser = async (req, res) => {
  try {
    const { userId } = req.params;

    const accounts = await Account.find({ user: userId }).populate(
      "user",
      "firstName lastName email",
    );

    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteaccount = async (req, res) => {
  try {
    const { accountNumber } = req.body;
    const userId = req.user.userId;

    if (!accountNumber) {
      return res.status(400).json({ message: "Account number is required" });
    }

    const account = await Account.findOne({
      accountNumber,
      user: userId,
    });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    await account.deleteOne();

    // 🔔 NOTIFICATION
    await Notification.create({
      user: userId,
      message: `Account ${accountNumber} deleted`,
      type: "account",
    });

    await recordHistory({
      userId,
      accountId: account._id,
      type: "Delete Account",
      message: `Deleted account ${account.accountNumber}`,
      status: "Completed",
      iban: account.iban,
      swiftCode: account.swift,
      accountType: account.accountType,
      accountNumber: account.accountNumber,
    });s

    const accounts = await Account.find({ user: userId }).select(
      "-transactionPin",
    );

    res.status(200).json({
      message: "Account deleted successfully",
      accounts,
    });
  } catch (error) {
    console.error("Delete account error:", error);

    res.status(500).json({
      message: "Failed to delete account",
      error: error.message,
    });
  }
};

exports.getAccountByNumberOrIban = async (req, res) => {
  try {
    const { query } = req.params;

    const account = await accountModel
      .findOne({
        $or: [
          { accountNumber: query },
          { iban: query }
        ]
      })
      .populate("user", "fullName email");

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.status(200).json({ account });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserBalance = async (req, res) => {
  try {
    const userId = req.user.userId;

    const accounts = await Account.find({ user: userId }).select(
      "accountType balance accountNumber"
    );

    if (!accounts || accounts.length === 0) {
      return res.status(404).json({
        message: "No accounts found for this user",
      });
    }

    res.status(200).json({
      accounts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch balance",
      error: error.message,
    });
  }
};
