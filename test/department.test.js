const expect = require("chai").expect;
const Department = require("../model/instance/department.model");
describe("Integration tests", () => {
  it(" new department", async () => {
    let department = new Department();
    let new_department = await department.new_department("oncology", "api-key-sample");
    expect(new_department).to.be.an("object");
    expect(new_department.result).to.be.an("boolean");
    let department_delete = await department.delete_department(new_department.data._id);
    expect(department_delete).to.be.an("object");
    expect(department_delete.result).to.be.an("boolean");
  });
  it("department delete get", async () => {
    let department = new Department();
    let new_department = await department.new_department("oncology", "api-key-sample");
    expect(new_department).to.be.an("object");
    expect(new_department.result).to.be.an("boolean");
    let department_info = await department.get_department(new_department.data._id);
    expect(department_info).to.be.an("object");
    expect(department_info.result).to.be.an("boolean");

    let department_delete = await department.delete_department(new_department.data._id);
    expect(department_delete).to.be.an("object");
    expect(department_delete.result).to.be.an("boolean");
  });

  it(" new department + contact info", async () => {
    let department = new Department();
    let new_department = await department.new_department("oncology with contact", "api-key-sample");
    expect(new_department).to.be.an("object");
    expect(new_department.result).to.be.an("boolean");

    let dep_contact = await department.update_department_contct(new_department.data.id, "c name", "c email", "c phone");
    expect(dep_contact).to.be.an("object");
    expect(dep_contact.result).to.be.an("boolean");

    let department_delete = await department.delete_department(new_department.data._id);
    expect(department_delete).to.be.an("object");
    expect(department_delete.result).to.be.an("boolean");
  });
});
