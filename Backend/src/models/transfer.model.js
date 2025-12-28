const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema({
  fromAccount: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Account", 
    required: true 
  },
  toAccount: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Account", 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true, 
    min: 0.01 
  },
  status: {
  type: String,
  enum: ['pending', 'completed', 'failed'],
  default: 'completed',
},
  transferredAt: { 
    type: Date, 
    default: Date.now 
  },
}, { timestamps: true });

module.exports = mongoose.model("Transfer", transferSchema);
