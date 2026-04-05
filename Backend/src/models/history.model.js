// models/history.model.js
const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    type: {
      type: String,
      required: true,
      enum: [
        "Deposit",
        "Withdrawal",
        "Transfer",
        "Create Account",
        "Delete Account",
        "Login",
        "Logout",
        "Other",
      ],
    },
    amount: {
      type: Number,
      default: 0,
    },
    relatedAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      default: "Completed",
      set: (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
    },
    referenceId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    message: {
      type: String,
    },
    device: {
      type: String,
    },
    location: {
      type: String,
    },
    iban: { type: String },
    swiftCode: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("History", historySchema);
