const Department = require("../department");
const Logger = require("../../config/logger");

module.exports = class DepartmentMoreInfoModel {
  constructor(department_id) {
    this.department_id = department_id;
  }
  async get_info() {
    try {
      // let department = await Department.findById(this.id);
      return {
        result: true,
        data: this.id,
      };
    } catch (e) {
      Logger.log("error", e);
      return {
        result: false,
        msg: "internal server error",
      };
    }
  }
  async new_info(name, value) {}
  async update_info(name, value) {}
  async remove_info(name) {}
};
