require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectdb = require("./src/config/connectdb");

const userRouter = require("./src/routes/user.routes");
const transferRouter = require("./src/routes/transfer.routes");
const depositRouter = require("./src/routes/deposit.routes");
const accountRouter = require("./src/routes/account.routes");
const notificationRouter = require("./src/routes/notification.routes");
const historyRouter = require("./src/routes/history.routes");
const routerTransaction = require("./src/routes/transactionRoutes");
const grantRouter = require("./src/routes/grant.routes");
const adminRouter = require("./src/routes/admin.routes");

const port = process.env.PORT || 7000;

const app = express();

app.use(express.json());

// upadete
app.use(
  cors({
    origin: ["http://localhost:5173", "https://fvm-bank.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use("/api/v1", userRouter);
app.use("/api/v1", transferRouter);
app.use("/api/v1", depositRouter);
app.use("/api/v1", adminRouter);
app.use("/api/v1", accountRouter);
app.use("/api/v1", historyRouter);
app.use("/api/v1", notificationRouter);
app.use("/api/v1", routerTransaction);
app.use("/api/v1", grantRouter);

app.listen(port, async () => {
  await connectdb();
  console.log(`Server running on port: ${port}`);
});
