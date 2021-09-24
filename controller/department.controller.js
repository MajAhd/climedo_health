const Response = require("../services/restapi/status");
const DepartmentModel = require("../model/instance/department.model");
let Validator = require("validatorjs");
exports.get_all_departments = async (req, res) => {
  let department = new DepartmentModel();
  let all_departments = await department.all_departments();
  if (all_departments.result) {
    Response.ApiRes(res, {
      status: 200,
      msg: "Get All Departments",
      data: all_departments.data,
    });
  } else {
    Response.ApiRes(res, {
      status: 500,
      msg: department.msg,
    });
  }
};

exports.get_department = async (req, res) => {
  let department_id = req.params["id"];
  let department = new DepartmentModel();
  let department_info = await department.get_department(department_id);
  if (department_info.result) {
    Response.ApiRes(res, {
      status: 200,
      msg: "Get Department info",
      data: department_info.data,
    });
  } else {
    Response.ApiRes(res, {
      status: 500,
      msg: department_info.msg,
    });
  }
};

exports.new_department = async (req, res) => {
  let validation = new Validator(
    {
      name: req.body.name,
      api_key: req.body.api_key,
    },
    {
      name: "required|string|min:3|max:128",
      api_key: "required|string",
    }
  );
  if (validation.fails()) {
    Response.ApiRes(res, {
      status: 400,
      msg: "validation Error",
      data: validation.errors.all(),
    });
  } else {
    let department = new DepartmentModel();
    let department_info = await department.new_department(req.body.name, req.body.api_key);
    if (department_info.result) {
      Response.ApiRes(res, {
        status: 200,
        msg: "Department Saved",
        data: department_info.data,
      });
    } else {
      Response.ApiRes(res, {
        status: 500,
        msg: department_info.msg,
      });
    }
  }
};

exports.update_department = async (req, res) => {
  let validation = new Validator(
    {
      name: req.body.name,
      api_key: req.body.api_key,
    },
    {
      name: "required|string|min:3|max:128",
      api_key: "required|string",
    }
  );
  if (validation.fails()) {
    Response.ApiRes(res, {
      status: 400,
      msg: "validation Error",
      data: validation.errors.all(),
    });
  } else {
    let department_id = req.params["id"];
    let department = new DepartmentModel();
    let department_info = await department.update_department(department_id, req.body.name, req.body.api_key);
    if (department_info.result) {
      Response.ApiRes(res, {
        status: 200,
        msg: "Department info Updated",
        data: department_info.data,
      });
    } else {
      Response.ApiRes(res, {
        status: 500,
        msg: department_info.msg,
      });
    }
  }
};

exports.delete_department = async (req, res) => {
  let department_id = req.params["id"];
  let department = new DepartmentModel();
  let department_info = await department.delete_department(department_id);
  if (department_info.result) {
    Response.ApiRes(res, {
      status: 200,
      msg: department_info.data,
    });
  } else {
    Response.ApiRes(res, {
      status: 500,
      msg: department_info.msg,
    });
  }
};

exports.search_department = async (req, res) => {
  let department_name = req.params["name"];
  let department = new DepartmentModel();
  let department_info = await department.search_department(department_name);
  if (department_info.result) {
    Response.ApiRes(res, {
      status: 200,
      msg: department_info.data,
    });
  } else {
    Response.ApiRes(res, {
      status: 500,
      msg: department_info.msg,
    });
  }
};
