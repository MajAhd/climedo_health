const expect = require("chai").expect;
const Department = require("../model/instance/department.model");
describe("Integration tests", () => {
  it("new department", async () => {
    let department = new Department();
    let new_department = await department.new_department("oncology", "api-key-sample");
    expect(new_department).to.be.an("object");
    expect(new_department.result).to.be.an("boolean");
  });
});
