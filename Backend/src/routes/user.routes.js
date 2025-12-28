const express = require("express");
const { createuser, loginuser } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/createuser", createuser);
userRouter.post("/loginuser", loginuser);

module.exports = userRouter;
