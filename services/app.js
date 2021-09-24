const express = require("express");
const path = require("path");
const compression = require("compression");
const Cors = require("./restapi/cors");
const app = express();
// routes
const HomeRoutes = require("../routes/home.route");
const DepartmentRoutes = require("../routes/department.route");
// App usages
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// CORS
app.use(Cors);
// routes usages
app.use(HomeRoutes);
app.use(DepartmentRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

// Error Pages
app.use("/error/500", (req, res, next) => {
  res.status(500).json({
    status: 500,
    msg: "Internal Server Error!",
  });
});
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    msg: "Request Not Found!",
  });
});

module.exports = app;
