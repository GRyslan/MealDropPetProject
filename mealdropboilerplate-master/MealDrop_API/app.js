const express = require("express");
const cors = require("cors");

const orderRouter = require("./routes/orderRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/order", orderRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
