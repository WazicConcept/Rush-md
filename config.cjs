// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Rushmd~gHY75p5C",
  PREFIX: process.env.PREFIX || '.',
  MODE: process.env.MODE || "public",
  };


module.exports = config;
