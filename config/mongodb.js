const mongoose = require("mongoose");
require("dotenv").config();

export const ClimedoDB = mongoose.createConnection("mongodb://127.0.0.1:27017", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.ClimedoDB = ClimedoDB;
