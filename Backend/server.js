require("dotenv").config();
const express = require("express");
const connectdb = require("./src/config/connectdb");
const userRouter = require("./src/routes/user.routes");
const {
  transferMoney,
} = require("./src/controllers/transfer.controller");
const transferRouter = require("./src/routes/transfer.routes");
const depositRouter = require("./src/routes/deposit.routes");
const adminRouter = require("./src/routes/admin.routes");
const accountRouter = require("./src/routes/account.routes");

const port = process.env.PORT;

const app = express();

app.use(express.json());

// routes
app.use("/api/v1/", userRouter);
// protected Routes
app.use("/api/v1/", transferRouter);
app.use("/api/v1/", depositRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1", accountRouter )

app.listen(port, async () => {
  await connectdb();
  console.log(`Server running on port: ${port}`);
});
