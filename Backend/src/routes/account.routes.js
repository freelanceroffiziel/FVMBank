const express = require("express");
const { createaccount, getaccountsbyuser, getaccountbyId } = require("../controllers/account.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const accountRouter = express.Router();

// Create new account
accountRouter.post("/createaccount", authMiddleware, createaccount );

accountRouter.get("/getaccountsbyuser/:userId", getaccountsbyuser );

accountRouter.get("/getaccountbyId/:id", getaccountbyId );

module.exports = accountRouter;
