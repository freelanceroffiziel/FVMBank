const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getHistoryByAccount, getAllHistorys, getHistory } = require("../controllers/history.controller");

const historyRouter = express.Router();

historyRouter.get("/getAllHistorys", authMiddleware, getAllHistorys);

historyRouter.get("/history/:historyId", authMiddleware, getHistory);

historyRouter.get("/account/:accountId", authMiddleware, getHistoryByAccount);

module.exports = historyRouter;