const userModel = require("../models/user.model");

exports.deposit = async (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({
      message: "Invalid deposit amount",
    });
  }

  try {
    const user = await userModel.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found ",
      });
    }

    user.balance += amount;
    await user.save();

    return res.status(200).json({
      message: `Deposited $${amount} successfully `,
      newBalance: user.balance,
      user: {
        fullName: user.fullName,
        accountNumber: user.accountNumber,
        balance: user.balance,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to deposit",
      error: error.message,
    });
  }
};
