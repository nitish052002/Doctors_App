require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const doctorRouter = require("./routes/doctors.routes");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/v1", doctorRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(8081, () => {
      console.log("Server is running 8081");
      console.log("DB Connected");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
