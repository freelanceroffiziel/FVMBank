// controllers/history.controller.js
const History = require("../models/history.model");

// Get all histories for logged-in user
const getAllHistorys = async (req, res) => {
  try {
    const transactions = await History.find({ user: req.user.userId })
      .populate("account", "accountNumber accountType balance iban swiftCode")
      .sort({ createdAt: -1 });

    if (!transactions.length) {
      return res.status(404).json({ message: "No histories found" });
    }

    res
      .status(200)
      .json({
        message: `${transactions.length} histories found`,
        transactions,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch histories", error: error.message });
  }
};

// Get a single history by ID
const getHistory = async (req, res) => {
  const { historyId } = req.params;
  try {
    const transaction = await History.findOne({
      _id: historyId,
      user: req.user.userId,
    }).populate("account", "accountNumber accountType balance iban swiftCode");

    if (!transaction) {
      return res.status(404).json({ message: "History not found" });
    }

    res.status(200).json({ message: "History found", transaction });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch history", error: error.message });
  }
};

// Get histories by account
const getHistoryByAccount = async (req, res) => {
  const { accountId } = req.params;
  try {
    const transactions = await History.find({ account: accountId })
      .populate("account", "accountNumber accountType iban swiftCode balance")
      .sort({ createdAt: -1 });

    if (!transactions.length) {
      return res
        .status(404)
        .json({ message: "No histories found for this account" });
    }

    res
      .status(200)
      .json({
        message: `${transactions.length} histories found`,
        transactions,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to fetch histories by account",
        error: error.message,
      });
  }
};

// ✅ Export all functions
module.exports = { getAllHistorys, getHistory, getHistoryByAccount };
