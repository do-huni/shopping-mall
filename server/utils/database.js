const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "manager",
  password: "6295",
  database: "shop",
});

module.exports = db;