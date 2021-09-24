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
    more_info: {
      type: Array,
      required: false,
      default: {
        contact_name: null,
        contact_email: null,
        contact_phone: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ClimedoDB.model("Department", DepartmentSchema);
