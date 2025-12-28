const express = require("express");
const { transferMoney } = require("../controllers/transfer.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const transferRouter = express.Router();

transferRouter.post("/transferMoney", authMiddleware, transferMoney);

module.exports = transferRouter;
