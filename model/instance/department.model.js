const Department = require("../department");
const Logger = require("../../config/logger");
module.exports = class DepartmentModel {
  async all_departments() {
    try {
      let department = await Department.find();
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
      let department = await Department.findById(id);
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

  async get_department_contact(id) {
    try {
      let department = await Department.findById(id).select(["contact_name", "contact_email", "contact_phone"]);
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
      let department = new Department({
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
      let department = await Department.findByIdAndUpdate(id, {
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
  async update_department_contct(id, contact_name, contact_email, contact_phone) {
    try {
      let department = await Department.findByIdAndUpdate(id, {
        $set: {
          contact_name: contact_name,
          contact_email: contact_email,
          contact_phone: contact_phone,
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
      let department = await Department.deleteOne({ _id: id });

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
      let departments = await Department.find({
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
