const DepartmentModel = require("../department");
const Logger = require("../../config/logger");
module.exports = class Department {
  async all_departments() {
    try {
      let department = await DepartmentModel.find();
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
  async get_department(id) {
    try {
      let department = await DepartmentModel.findById(id);
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
  async new_department(name, api_key) {
    try {
      let department = new DepartmentModel({
        name: name,
        api_key: api_key,
      });

      return {
        result: true,
        data: await department.save(),
      };
    } catch (e) {
      Logger.log("error", e);
      return {
        result: false,
        msg: "internal server error",
      };
    }
  }
  async update_department(id, name, api_key) {
    try {
      let department = await DepartmentModel.findByIdAndUpdate(id, {
        $set: {
          name: name,
          api_key: api_key,
        },
      });

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
  async delete_department(id) {
    try {
      let department = await DepartmentModel.deleteOne(id);

      return {
        result: true,
        data: `Department ${id} Deleted`,
      };
    } catch (e) {
      Logger.log("error", e);
      return {
        result: false,
        msg: "internal server error",
      };
    }
  }
  async search_department(name) {
    try {
      let departments = await DepartmentModel.find({
        name: { $regex: ".*" + name + ".*" },
      });

      return {
        result: true,
        data: departments,
      };
    } catch (e) {
      Logger.log("error", e);
      return {
        result: false,
        msg: "internal server error",
      };
    }
  }
};
