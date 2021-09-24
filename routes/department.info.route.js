const express = require("express");

require("dotenv").config();
const router = express.Router();
const DepartmentController = require("../controller/department.controller");
const DepartmentrUrl = process.env.API_V1 + "department/info";

module.exports = router;
