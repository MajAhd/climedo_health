const Response = require("../services/restapi/status");
const DepartmentMoreInfoModel = require("../model/instance/department.more.info.model");
let Validator = require("validatorjs");

//  Get Depatrtment More Info
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

//  Post Depatrtments More Info
exports.post_department_more_info = async (req, res) => {
  let department_id = req.params["id"];
  let new_infos = req.body.more_info;
  let department = new DepartmentMoreInfoModel(department_id);
  let response = [];
  for (var key in new_infos) {
    let info_name = key.toLowerCase();
    let info_value = new_infos[key].toLowerCase();
    let more_info = await department.more_info(info_name, info_value);
    response.push(more_info);
  }
  Response.ApiRes(res, {
    status: 200,
    msg: "Post Department More Info",
    data: response,
  });
};
