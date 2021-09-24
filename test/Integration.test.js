const expect = require("chai").expect;
const request = require("supertest");
let app = require("../services/app");
const DepartmentrUrl = process.env.API_V1 + "department";
describe("Api tests", () => {
  it("get /api/departemnt", async () => {
    return request(app)
      .get(DepartmentrUrl)
      .then(function (response) {
        expect(response.status).to.equal(200);
        expect(response.type).to.equal("application/json");
        expect(response.body).to.be.an("object");
        expect(response.body.status).to.equal(200);
        expect(response.body.msg).to.equal("Get All Departments");
      });
  });

  it("get /api/departemnt/:id", async () => {
    return request(app)
      .get(DepartmentrUrl + "/614de6c7366b9ba29ee6e09a")
      .then(function (response) {
        expect(response.status).to.equal(200);
        expect(response.type).to.equal("application/json");
        expect(response.body).to.be.an("object");
        expect(response.body.status).to.equal(200);
        expect(response.body.msg).to.equal("Get Department info");
      });
  });

  it("get /api/departemnt/search/:name", async () => {
    return request(app)
      .get(DepartmentrUrl + "/search/onco")
      .then(function (response) {
        expect(response.status).to.equal(200);
        expect(response.type).to.equal("application/json");
        expect(response.body).to.be.an("object");
        expect(response.body.status).to.equal(200);
        expect(response.body.msg).to.equal("search department");
      });
  });
});
