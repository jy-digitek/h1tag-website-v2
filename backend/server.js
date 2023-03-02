const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const postrouter = require("./route/post");
const categoryrouter = require("./route/category");
const userrouter = require("./route/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cors());
app.use(cookieParser());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL, (err) => {
  if (!err) console.log("database connected");
});

app.use(express.json());
app.use("/api/vi/post", postrouter);
app.use("/api/vi/category", categoryrouter);
app.use("/api/vi/user", userrouter);

app.listen(process.env.PORT, (err) => {
  if (!err) console.log(`server is started ${process.env.PORT}`);
});
