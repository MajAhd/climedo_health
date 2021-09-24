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
        name: name.toLowerCase(),
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
      let department = await this.get_department(id);
      if (department.result && department.data != null) {
        department.data.name = name.toLowerCase();
        department.data.api_key = api_key;
        department.data.save();
        return {
          result: true,
          data: department.data,
        };
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
  async update_department_contct(id, contact_name, contact_email, contact_phone) {
    try {
      let department = await this.get_department(id);
      if (department.result && department.data != null) {
        department.data.contact_name = contact_name;
        department.data.contact_email = contact_email;
        department.data.contact_phone = contact_phone;
        department.data.save();
        return {
          result: true,
          data: department.data,
        };
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
        name: { $regex: ".*" + name.toLowerCase() + ".*" },
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
