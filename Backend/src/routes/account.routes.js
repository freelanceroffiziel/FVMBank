const express = require("express");
const {
  createaccount,
  getaccountsbyuser,
  getaccountbyId,
  deleteaccount,
  getAccountByNumberOrIban,
  getUserBalance,
} = require("../controllers/account.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const accountRouter = express.Router();

// Create new account
accountRouter.post("/createaccount", authMiddleware, createaccount);

accountRouter.get("/getaccountsbyuser/:userId", getaccountsbyuser);

accountRouter.post("/accounts/delete", authMiddleware, deleteaccount);

accountRouter.get("/account/:query", authMiddleware, getAccountByNumberOrIban);

accountRouter.get("/balance", authMiddleware, getUserBalance);

module.exports = accountRouter;
