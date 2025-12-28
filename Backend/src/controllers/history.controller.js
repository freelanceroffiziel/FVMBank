const historyModel = require("../models/history.model");

exports.getAllTransactions = async (req, res) => {
  const { userId } = req.user;
  if (!userId) {
    return res.status(400).json({
      message: "User Id missing",
    });
  }

  try {
    const transactions = await historyModel
      .find({ taskAuthor: userId })
      .populate("account relatedAccount", "name email")
      .sort({ createdAt: -1 });
    if (!transactions || transactions.length === 0) {
      return res.status(404).json({
        message: `transactions not found`,
      });
    }

    res.status(200).json({
      message: `Transactions ${transactions.length} found successfully  `,
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions", error });
  }
};

exports.getTransaction = async (req, res) => {
  const { transactionId } = req.params;
  const { userId } = req.user;

  if (!transactionId) {
    return res.status(400).json({
      message: `Transaction ID is required`,
    });
  }

  try {
    const transaction = await historyModel
      .findOne({ _id: transactionId, taskAuthor: userId })
      .populate("account relatedAccount", "name email");
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({
      message: `Transaction found successfully`,
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transaction", error });
  }
};

exports.getTransactionHistoryByAccount = async (req, res) => {
  const { historyId } = req.params;
  try {
    const history = await historyModel
      .find({ account: req.params.accountId })
      .populate("account relatedAccount", "name email")
      .sort({ createdAt: -1 });

    if (!history) {
      return res.status(404).json({ message: "Histories not found" });
    }

    res.status(200).json({
      message: `Historys found successfully`,
      history,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch account history", error });
  }
};
