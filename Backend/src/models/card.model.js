const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
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

    cardNumber: {
      type: String,
      required: true,
    },

    cardType: {
      type: String,
      enum: ["virtual", "physical"],
      default: "virtual",
    },

    currency: {
      type: String,
      default: "USD",
    },

    status: {
      type: String,
      enum: ["active", "frozen"],
      default: "active",
    },

    expiry: String,

    cardHolder: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);