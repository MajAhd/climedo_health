const mongoose = require("mongoose");
const ClimedoDB = require("../config/mongodb");
const Schema = mongoose.Schema;
const DepartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 128,
      min: 3,
    },
    api_key: {
      type: String,
      required: true,
    },
    contact_name: {
      type: String,
      required: false,
      default: null,
      max: 128,
      min: 3,
    },
    contact_email: {
      type: String,
      default: null,
      max: 255,
      required: false,
    },
    contact_phone: {
      type: String,
      max: 50,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ClimedoDB.model("Department", DepartmentSchema);
