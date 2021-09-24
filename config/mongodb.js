const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose.createConnection("mongodb://127.0.0.1:27017", {
  dbName: "climedo",
  user: "",
  pass: "",
  autoIndex: true,
  autoCreate: true,
  bufferCommands: true,
});
