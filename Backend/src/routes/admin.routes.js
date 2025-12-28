const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMdiddleware");
const { deleteuser, getallusers, admingettransactions, admingettransaction, admingetallusers, admindeleteuser } = require("../controllers/admin.controller");
const adminMdiddleware = require("../middlewares/adminMdiddleware");
const adminRouter = express.Router();

// All routes here require authentication + admin role
adminRouter.get("/users", authMiddleware, adminMdiddleware, admingetallusers);

adminRouter.get("/transactions",admingettransactions );
adminRouter.get("/transaction/:transactionId",admingettransaction );

adminRouter.delete("/users/:id", authMiddleware, adminMiddleware, admindeleteuser);

module.exports = adminRouter;
