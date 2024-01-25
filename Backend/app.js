const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DB__URL).then(() => {
  app.listen(8081, () => {
    console.log("Server is running");
    console.log("DB Connected");
  });
});
