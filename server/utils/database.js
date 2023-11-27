const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "manager",
  password: "6295",
  database: "shop",
});

module.exports = db;