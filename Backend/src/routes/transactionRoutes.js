// routes/transactionRoutes.js
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getRecentTransactions,
} = require("../controllers/transaction.controller");
const routerTransaction = express.Router();

// GET recent transactions for a user
routerTransaction.get(
  "/recent/:userId",
  authMiddleware,
  getRecentTransactions,
);

module.exports = routerTransaction;
