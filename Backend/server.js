require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const connectdb = require("./src/config/connectdb");

const userRouter = require("./src/routes/user.routes");
const transferRouter = require("./src/routes/transfer.routes");
const depositRouter = require("./src/routes/deposit.routes");
const adminRouter = require("./src/routes/admin.routes");
const accountRouter = require("./src/routes/account.routes");

const port = process.env.PORT || 7000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, 
  })
);


app.use("/api/v1/", userRouter);
app.use("/api/v1/", transferRouter);
app.use("/api/v1/", depositRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1", accountRouter);


app.listen(port, async () => {
  await connectdb();
  console.log(`Server running on port: ${port}`);
});