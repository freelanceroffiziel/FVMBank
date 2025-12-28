const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
  account: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Account", 
    required: true,
  },
  amount: { 
    type: Number, 
    required: true, 
    min: 0.01 
  },
  depositedAt: { 
    type: Date, 
    default: Date.now 
  },
}, { timestamps: true });

module.exports = mongoose.model("Deposit", depositSchema);
