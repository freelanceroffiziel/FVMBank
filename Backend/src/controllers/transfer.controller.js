const accountModel = require("../models/account.model");
const Transfer = require("../models/transfer.model");
const Notification = require("../models/notification.model");
const recordHistory = require("../utils/historyHelper");
const MailHelper = require("../utils/MailHelper");
const bcrypt = require("bcryptjs");

exports.transferMoney = async (req, res) => {
  const { fromAccountType, toAccountNumber, amount, transactionPin } = req.body;

  if (!fromAccountType || !toAccountNumber || !amount || amount <= 0 || !transactionPin) {
    return res.status(400).json({ message: "Invalid transfer data" });
  }

  try {
    // ✅ Find sender account
    const sender = await accountModel
      .findOne({ user: req.user.userId, accountType: fromAccountType })
      .populate("user", "firstName lastName email");

    if (!sender) return res.status(404).json({ message: "Sender account not found" });

    // ✅ Check transaction PIN
    const isMatch = await bcrypt.compare(transactionPin, sender.transactionPin);
    if (!isMatch) return res.status(400).json({ message: "Invalid transaction PIN" });

    // ✅ Find receiver account
    const receiver = await accountModel
      .findOne({ $or: [{ accountNumber: toAccountNumber }, { iban: toAccountNumber }] })
      .populate("user", "firstName lastName email");

    if (!receiver) return res.status(404).json({ message: "Recipient account not found" });
    if (sender.accountNumber === receiver.accountNumber)
      return res.status(400).json({ message: "Cannot transfer to your own account" });
    if (sender.balance < amount) return res.status(400).json({ message: "Insufficient balance" });

    // ✅ Update balances
    sender.balance -= amount;
    receiver.balance += amount;
    await sender.save();
    await receiver.save();

    // ✅ Record transfer (use lowercase status)
    const transferRecord = new Transfer({
      fromAccount: sender._id,
      toAccount: receiver._id,
      amount,
      status: "completed", // lowercase!
    });
    await transferRecord.save();

    // ✅ Record history for both accounts
    await recordHistory({
      userId: sender.user._id,
      accountId: sender._id,
      type: "Transfer",
      amount,
      message: `Transferred $${amount} to ${receiver.user.firstName} ${receiver.user.lastName}`,
      status: "completed",
      accountType: sender.accountType,
      accountNumber: sender.accountNumber,
    });

    await recordHistory({
      userId: receiver.user._id,
      accountId: receiver._id,
      type: "Transfer",
      amount,
      message: `Received $${amount} from ${sender.user.firstName} ${sender.user.lastName}`,
      status: "completed",
      accountType: receiver.accountType,
      accountNumber: receiver.accountNumber,
    });

    // ✅ Notifications
    await Notification.create({
      user: sender.user._id,
      message: `You transferred $${amount} to ${receiver.user.firstName} ${receiver.user.lastName}`,
      type: "transaction",
    });

    await Notification.create({
      user: receiver.user._id,
      message: `You received $${amount} from ${sender.user.firstName} ${sender.user.lastName}`,
      type: "transaction",
    });

    // ✅ Send emails
    await MailHelper.sendTransferNotificationEmail(sender, receiver, amount);

    return res.status(200).json({
      message: `Successfully transferred $${amount.toLocaleString()} to ${receiver.user.firstName} ${receiver.user.lastName}`,
      transfer: {
        from: `${sender.user.firstName} ${sender.user.lastName}`,
        to: `${receiver.user.firstName} ${receiver.user.lastName}`,
        amount,
        newBalance: sender.balance,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Transfer failed", error: err.message });
  }
};