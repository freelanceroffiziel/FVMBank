const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
      unique: true,
    },
    accountType: {
      type: String,
      enum: ["savings", "current", "business"],
      default: "savings",
    },
    balance: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "closed", "frozen"],
      default: "active",
    },
    transactionPin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);
