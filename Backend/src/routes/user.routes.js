const express = require("express");
const {
  createuser,
  loginuser,
  verifyOtp,
  resendOtp,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/createuser", createuser);
userRouter.post("/loginuser", loginuser);
userRouter.post("/verify-otp", verifyOtp);
userRouter.post("/resend-otp", resendOtp);

module.exports = userRouter;
