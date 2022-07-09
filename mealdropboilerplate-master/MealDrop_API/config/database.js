const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const MONGO_URI = process.env.DATABASE;
mongoose.connect(MONGO_URI).then(()=>console.log("Connected to MongoDB " + MONGO_URI.split("/").pop())).
    catch(() => "Failed to connect to MongoDB");
mongoose.connection.on("error", err => console.log("Error while working with MongoDB" + err));

