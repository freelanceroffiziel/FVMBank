const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },

    card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },

    type: {
      type: String,
      enum: ["deposit", "transfer", "withdrawal", "payment"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "USD",
    },

    direction: {
      type: String,
      enum: ["debit", "credit"],
      required: true,
    },

    merchant: {
      type: String, // Amazon, Netflix, Apple
    },

    reference: {
      type: String,
      unique: true,
    },

    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },

    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);