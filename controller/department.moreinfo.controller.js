const Response = require("../services/restapi/status");
const DepartmentMoreInfoModel = require("../model/instance/department.more.info.model");
let Validator = require("validatorjs");

//  Get All Depatrtments More Info
exports.get_department_more_info = async (req, res) => {
  let department_id = req.params["id"];
  let department = new DepartmentMoreInfoModel(department_id);
  let more_info = await department.get_info();

  if (more_info.result) {
    Response.ApiRes(res, {
      status: 200,
      msg: "Get Department More Info",
      data: more_info.data,
    });
  } else {
    Response.ApiRes(res, {
      status: 500,
      msg: more_info.msg,
    });
  }
};
