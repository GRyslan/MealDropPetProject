const express = require("express");
const cors = require("cors");

const orderRouter = require("./routes/orderRouter");
const userRouter = require("./routes/userRouter");
const {errorHandler} = require("./middlewares/errorMiddleware");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: process.env.CLIENT_API}));
app.use(cookieParser())
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/user", userRouter);
app.use(errorHandler);
module.exports = app;
