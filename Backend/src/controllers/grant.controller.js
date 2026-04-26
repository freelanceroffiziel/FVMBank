const MailHelper = require("../utils/MailHelper");
const Grant = require("../models/grant.model");
const userModel = require("../models/user.model");
const Notification = require("../models/notification.model");
const Account = require("../models/account.model");

exports.createGrant = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { userId, amount } = req.body;

    if (!userId || !amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid grant data" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const reference = "GR-" + Date.now();

    const confirmationCode = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();

    const grant = await Grant.create({
      user: userId,
      amount,
      reference,
      confirmationCode,
      status: "pending",
    });

    await Notification.create({
      user: userId,
      message: `A grant of $${amount} has been assigned to you. Use your confirmation code to claim it.`,
      type: "grant",
    });

    await MailHelper.sendGrantEmail(user, amount, reference, confirmationCode);

    return res.status(201).json({
      message: "Grant created successfully",
      confirmationCode,
      grant,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.confirmGrant = async (req, res) => {
  try {
    const { code } = req.body;
    const userId = req.user.userId;

    if (!code) {
      return res.status(400).json({ message: "Confirmation code required" });
    }

    const grant = await Grant.findOne({
      user: userId,
      confirmationCode: code,
      status: "pending",
    });

    if (!grant) {
      return res.status(400).json({
        message: "Invalid or already used confirmation code",
      });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const account = await Account.findOne({ user: userId });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // 💰 Update account balance
    account.balance += grant.amount;
    await account.save();

    // (optional sync)
    user.balance = account.balance;
    await user.save();

    grant.status = "claimed";
    await grant.save();

    await Notification.create({
      user: userId,
      message: `Your grant of $${grant.amount} has been successfully claimed and added to your account.`,
      type: "grant",
    });

    await MailHelper.sendGrantClaimedEmail(user, grant.amount, account.balance);

    return res.status(200).json({
      message: "Grant claimed successfully",
      newBalance: account.balance,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.rejectGrant = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { grantId } = req.params;

    const grant = await Grant.findById(grantId);
    if (!grant) {
      return res.status(404).json({ message: "Grant not found" });
    }

    if (grant.status !== "pending") {
      return res.status(400).json({
        message: "Only pending grants can be rejected",
      });
    }

    grant.status = "rejected";
    await grant.save();

    const user = await userModel.findById(grant.user);

    await Notification.create({
      user: grant.user,
      message: "Your assigned grant has been cancelled.",
      type: "grant",
    });

    if (user) {
      await MailHelper.sendGrantRejectedEmail(user);
    }

    return res.status(200).json({
      message: "Grant rejected successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getUserGrants = async (req, res) => {
  try {
    const userId = req.user.userId;

    const grants = await Grant.find({ user: userId }).sort({
      createdAt: -1,
    });

    return res.status(200).json(grants);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
