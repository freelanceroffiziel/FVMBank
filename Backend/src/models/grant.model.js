// models/grant.model.js
const mongoose = require("mongoose");

const grantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    reference: String,

    confirmationCode: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "claimed", "rejected"],
      default: "pending",
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Grant", grantSchema);