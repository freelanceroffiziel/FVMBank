const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/adminMiddleware");

const {
  createAdmin,
  adminGetAllUsers,
  adminGUserById,
  deleteUser,
  lockUserAccount,
  unlockUserAccount,
  adminForgotPassword,
  adminResetPassword,
  adminResetUserPassword,
  adminLogin,
} = require("../controllers/admin.controller");

const adminRouter = express.Router();

// ================= AUTH =================
adminRouter.post("/create-admin", createAdmin);
adminRouter.post("/admin-login", adminLogin);

// ================= USERS =================
adminRouter.get("/users", authMiddleware, isAdmin, adminGetAllUsers);
adminRouter.get("/users/:id", authMiddleware, isAdmin, adminGUserById);
adminRouter.delete("/users/:id", authMiddleware, isAdmin, deleteUser);

// ================= ACCOUNT CONTROL =================
adminRouter.patch("/users/:id/lock", authMiddleware, isAdmin, lockUserAccount);
adminRouter.patch("/users/:id/unlock", authMiddleware, isAdmin, unlockUserAccount);

// ================= PASSWORD =================
adminRouter.post("/admin-forgot-password", adminForgotPassword);
adminRouter.post("/admin-reset-password", adminResetPassword);
adminRouter.post("/admin-reset-user-password", authMiddleware, isAdmin, adminResetUserPassword);

module.exports = adminRouter;