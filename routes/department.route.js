const express = require("express");

require("dotenv").config();
const router = express.Router();
const DepartmentController = require("../controller/department.controller");
const DepartmentrUrl = process.env.API_V1 + "department";

router.get(DepartmentrUrl, DepartmentController.get_all_departments);
router.post(DepartmentrUrl, DepartmentController.new_department);
router.get(DepartmentrUrl + "/:id", DepartmentController.get_department);

router.get(DepartmentrUrl + "/search/:name", DepartmentController.search_department);
router.post(DepartmentrUrl + "/:id", DepartmentController.update_department);
router.delete(DepartmentrUrl + "/:id", DepartmentController.delete_department);

module.exports = router;
