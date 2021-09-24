const expect = require("chai").expect;
const request = require("supertest");
const express = require("express");
const app = express();
const DepartmentrUrl = process.env.API_V1 + "department";
describe("Api tests", () => {
  it("get /api/departemnt", async () => {
    request(app).get(DepartmentrUrl).expect("Content-Type", /json/).expect(200).expect({ msg: "Get All Departments" });
  });

  it("get /api/departemnt/:id", async () => {
    request(app)
      .get(DepartmentrUrl + "/614de6c7366b9ba29ee6e09a")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ msg: "Get Department info" });
  });

  it("get /api/departemnt/search/:name", async () => {
    request(app)
      .get(DepartmentrUrl + "/onco")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ msg: "search department" });
  });
  it("get /api/departemnt/:id/contact", async () => {
    request(app)
      .get(DepartmentrUrl + "/614de6c7366b9ba29ee6e09a/contact")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ msg: "Get Department contact info" });
  });
});
