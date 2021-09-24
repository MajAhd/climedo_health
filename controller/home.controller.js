const Response = require("../services/restapi/status");
exports.HomePage = async (req, res) => {
  let data = {
    name: "Todo Api",
  };
  Response.ApiRes(res, {
    status: 200,
    msg: undefined,
    data: data,
  });
};
