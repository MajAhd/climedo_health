const Department = require("../department");
const Logger = require("../../config/logger");

module.exports = class DepartmentMoreInfoModel {
  constructor(department_id) {
    this.department_id = department_id;
  }
  async get_info() {
    try {
      let department = await Department.findById(this.department_id).select("more_info");
      return {
        result: true,
        data: department,
      };
    } catch (e) {
      Logger.log("error", e);
      return {
        result: false,
        msg: "internal server error",
      };
    }
  }
  async more_info(name, value) {
    let department = await this.get_info();
    if (department.result && department.data != null) {
      let save_new_info = await this.update_more_info(name, value);
      return {
        result: true,
        msg: `department moreinfo : ${name} as ${value} Added!`,
        data: save_new_info,
      };
    } else {
      return {
        result: false,
        msg: `department not found`,
      };
    }
  }
  async update_more_info(name, value) {
    try {
      let department = await Department.findById(this.department_id);
      if (department != null) {
        let obj = department.more_info[0];
        obj[name] = value;
        await Department.updateOne(
          { _id: this.department_id },
          {
            $set: {
              more_info: [obj],
            },
          }
        );
        return department.more_info;
      } else {
        return {
          result: false,
          msg: "department not found!",
        };
      }
    } catch (e) {
      Logger.log("error", e);
      return {
        result: false,
        msg: "internal server error",
      };
    }
  }
};
