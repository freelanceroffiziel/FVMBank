const express = require("express");
const { getNotifications, clearNotifications, markAllAsRead } = require("../controllers/notification.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const notificationRouter = express.Router();

notificationRouter.get("/notifications", authMiddleware, getNotifications);
notificationRouter.patch("/notifications/mark-all-read", authMiddleware, markAllAsRead);
notificationRouter.delete("/notifications/clear", authMiddleware, clearNotifications);

module.exports = notificationRouter;