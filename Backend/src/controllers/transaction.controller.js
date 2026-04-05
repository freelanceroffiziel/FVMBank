const History = require("../models/history.model");

exports.getRecentTransactions = async (req, res) => {
  try {
    const { userId } = req.params;
    const limit = parseInt(req.query.limit) || 5;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Fetch latest history records
    const histories = await History.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("account", "accountNumber accountType");

    const formatted = histories.map((h) => ({
      id: h._id,
      date: h.createdAt,
      type: h.type,
      amount: h.amount,
      description: h.message,
      status: h.status,
      accountNumber: h.account?.accountNumber || "N/A",
    }));

    res.json({
      message: `${formatted.length} recent transactions fetched`,
      transactions: formatted,
    });
  } catch (error) {
    console.error("Get recent transactions error:", error);
    res.status(500).json({ message: "Failed to fetch recent transactions" });
  }
};