const accountModel = require("../models/account.model");
const Transfer = require("../models/transfer.model");
const {
  sendTransferNotificationEmail,
} = require("../utils/utils.sendMails");

exports.transferMoney = async (req, res) => {
  const { toAccountNumber, amount, transactionPin } = req.body;

  if (!toAccountNumber || !amount || amount <= 0 || !transactionPin) {
    return res.status(400).json({ message: "Invalid transfer data" });
  }

  try {
    const sender = await accountModel
      .findOne({ user: req.user.userId })
      .populate("user");
    if (!sender) {
      return res.status(400).json({ message: "Sender account not found" });
    }

    if (!sender.transactionPin !== transactionPin) {
      return res.status(400).json({ message: "Invalid transaction pin" });
    }

    const receiver = await accountModel
      .findOne({ accountNumber: toAccountNumber })
      .populate("user");
    if (!receiver) {
      return res.status(400).json({ message: "Recipient not found" });
    }

    if (sender.accountNumber === toAccountNumber) {
      return res
        .status(400)
        .json({ message: "Cannot transfer to your own account" });
    }

    if (sender.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    if (receiver.accountNumber !== accountNumber) {
      return res.status(400).json({
        message: `Invalid account number`,
      });
    }

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    const transferRecord = new Transfer({
      fromAccount: sender._id,
      toAccount: receiver._id,
      amount,
      status: "completed",
    });
    await transferRecord.save();

    await sendTransferNotificationEmail(sender, receiver, amount);

    return res.status(200).json({
      message: `Successfully transferred $${amount.toLocaleString()} to ${
        receiver.user.fullName
      } (${receiver.accountNumber})`,
      transfer: {
        from: sender.user.fullName,
        to: receiver.user.fullName,
        amount,
        newBalance: sender.balance,
        transferId: transferRecord._id,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Transfer failed",
      error: err.message,
    });
  }
};
