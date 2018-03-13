var mysql = require("mysql");
require("dotenv").load();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  // password: process.env.DB_PASSWORD,
  password: process.env.DB_PASSWORD,
  database: "burger_db"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
