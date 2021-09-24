const Ioredis = require("ioredis");
require("dotenv").config();

export const io_redis = new Ioredis({
  host: process.env.REDIS_HOST,
  port: parseInt(`${process.env.REDIS_PORT}`),
});
module.exports = io_redis;
