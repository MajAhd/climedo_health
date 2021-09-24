const Response = require("../services/restapi/status");
exports.HomePage = async (req, res) => {
  let data = {
    name: "Climedo Health Api",
  };
  Response.ApiRes(res, {
    status: 200,
    msg: undefined,
    data: data,
  });
};
