const expect = require("chai").expect;
const DepartmentModel = require("../model/instance/department.model");
const DepartmentMoreInfoModel = require("../model/instance/department.more.info.model");
describe("Integration tests", () => {
  it(" new department", async () => {
    // New Depertment
    let department = new DepartmentModel();
    let new_department = await department.new_department("oncology", "api-key-sample");
    expect(new_department).to.be.an("object");
    expect(new_department.result).to.be.an("boolean");
    // Delete Depertment
    let department_delete = await department.delete_department(new_department.data._id);
    expect(department_delete).to.be.an("object");
    expect(department_delete.result).to.be.an("boolean");
  });
  it("department delete get", async () => {
    // New Depertment
    let department = new DepartmentModel();
    let new_department = await department.new_department("oncology", "api-key-sample");
    expect(new_department).to.be.an("object");
    expect(new_department.result).to.be.an("boolean");
    // Get Depertment
    let department_info = await department.get_department(new_department.data._id);
    expect(department_info).to.be.an("object");
    expect(department_info.result).to.be.an("boolean");
    // Delete Depertment
    let department_delete = await department.delete_department(new_department.data._id);
    expect(department_delete).to.be.an("object");
    expect(department_delete.result).to.be.an("boolean");
  });

  it(" new department + contact info", async () => {
    // New Depertment
    let department = new DepartmentModel();
    let new_department = await department.new_department("oncology with contact", "api-key-sample");
    expect(new_department).to.be.an("object");
    expect(new_department.result).to.be.an("boolean");
    // Set Depertment More Info
    let dep_more_info = new DepartmentMoreInfoModel(new_department.data.id);
    let dep_contact = await dep_more_info.more_info("contact_name", "Jack Ma");
    expect(dep_contact).to.be.an("object");
    expect(dep_contact.result).to.be.an("boolean");
    // New Depertment More Info
    let dep_contact_address = await dep_more_info.more_info("address", "Berlin");
    expect(dep_contact_address).to.be.an("object");
    expect(dep_contact_address.result).to.be.an("boolean");
    // Delete Depertment
    let department_delete = await department.delete_department(new_department.data._id);
    expect(department_delete).to.be.an("object");
    expect(department_delete.result).to.be.an("boolean");
  });
});
