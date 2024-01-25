const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
  name: String,
  city: String,
});

module.exports = mongoose.model("doctors", doctorSchema);
