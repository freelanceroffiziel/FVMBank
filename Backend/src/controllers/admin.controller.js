const User = require("../models/user.model");
const accountModel = require("../models/account.model");

exports.admingetallusers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message });
  }
};

exports.admingettransactions = async (req, res) => {
  const { userId } = req.user;

  if (!userId) {
    return res.status(400).json({
      message: "User Id missing",
    });
  }

  try {
    const transactions = await accountModel.find({ user: userId });
    if (!transactions || transactions.length === 0) {
      return res.status(404).json({
        message: `Transactions not found`,
      });
    }

    res.status(200).json({
      message: `${transactions.length} Transactions found successfully  `,
      transactions,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
    });
  }
};

exports.admingettransaction = async (req, res) => {
  const { transactionId } = req.params;
  const { userId } = req.user;

  if (!transactionId) {
    return res.status(400).json({
      message: `TransactionId ID is required`,
    });
  }

  try {
    const transaction = await accountModel.findOne({
      _id: transactionId,
      user: userId,
    });
    if (!transaction) {
      return res.status(404).json({
        message: `Task not found or you dont have access to this task `,
      });
    }

    res.status(200).json({
      message: ` Transaction with Id ${transaction} found successfully `,
      transaction,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
    });
  }
};

exports.admindeleteuser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};
