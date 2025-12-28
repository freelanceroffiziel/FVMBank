const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  account: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Account", 
    required: true 
  },
  referenceModel: { type: String, enum: ['Deposit', 'Transfer'] },
  amount: { 
    type: Number, 
    required: true 
  },
  relatedAccount: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Account" 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
  referenceId: { type: mongoose.Schema.Types.ObjectId, refPath: 'referenceModel' },
}, { timestamps: true });

module.exports = mongoose.model("History", historySchema);
