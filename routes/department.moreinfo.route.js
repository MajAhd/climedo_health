const express = require("express");

require("dotenv").config();
const router = express.Router();
const DepartmentMoreInfoController = require("../controller/department.moreinfo.controller");
const DepartmentrUrl = process.env.API_V1 + "department";

router.get(DepartmentrUrl + "/:id/info", DepartmentMoreInfoController.get_department_more_info);
router.post(DepartmentrUrl + "/:id/info", DepartmentMoreInfoController.post_department_more_info);

module.exports = router;
