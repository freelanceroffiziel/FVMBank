const accountModel = require("../models/account.model");
const Notification = require("../models/notification.model");
const recordHistory = require("../utils/historyHelper");
const MailHelper = require("../utils/MailHelper");

exports.deposit = async (req, res) => {
  const { accountType, amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: "Invalid deposit amount" });
  }

  try {
    const account = await accountModel
      .findOne({ user: req.user.userId, accountType })
      .populate("user", "firstName lastName email"); 

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    account.balance += amount;
    await account.save();

    if (account.user) {
      await MailHelper.sendDepositNotificationEmail(account.user, account, amount);
    }

    await Notification.create({
      user: req.user.userId,
      message: `Deposited $${amount} to your ${accountType} account successfully`,
      type: "transaction",
    });

    await recordHistory({
      userId: req.user.userId,
      accountId: account._id,
      type: "Deposit",
      message: `Deposited $${amount} to ${accountType} account successfully`,
      status: "Completed",
      iban: account.iban,
      swiftCode: account.swift,
      accountType: account.accountType,
      accountNumber: account.accountNumber,
      amount,
    });

    return res.status(200).json({
      message: `Deposited $${amount} successfully`,
      newBalance: account.balance,
      account: {
        accountNumber: account.accountNumber,
        accountType: account.accountType,
        balance: account.balance,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to deposit", error: err.message });
  }
};