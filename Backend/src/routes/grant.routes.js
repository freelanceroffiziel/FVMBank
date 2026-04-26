const express = require("express");
const {
  createGrant,
  confirmGrant,
  rejectGrant,
  getUserGrants,
} = require("../controllers/grant.controller");
const isAdmin = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const grantRouter = express.Router();

grantRouter.post("/creategrant", authMiddleware, isAdmin, createGrant);
grantRouter.put("/reject/:grantId", authMiddleware, isAdmin, rejectGrant);

grantRouter.post("/confirmgrant", authMiddleware, confirmGrant);
grantRouter.get("/mygrants", authMiddleware, getUserGrants);

module.exports = grantRouter;
