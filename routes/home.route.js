const express = require("express");

require("dotenv").config();
const router = express.Router();
const HomeController = require("../controller/home.controller");

router.get("/", HomeController.HomePage);

module.exports = router;
