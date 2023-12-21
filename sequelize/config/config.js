'use strict';
const dotenv = require("dotenv");
dotenv.config()
const process = require('process');
module.exports =  {
  development: {
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  }
}