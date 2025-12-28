const express = require("express");
const { deposit } = require("../controllers/deposit.controllers");
const authMiddleware = require("../middlewares/authMiddleware");

const depositRouter = express.Router();

depositRouter.post("/deposit", authMiddleware, deposit);

module.exports = depositRouter
