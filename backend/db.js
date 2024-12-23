const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost", // database host
  user: "root", // database user
  password: "Doms1234", // database password
  database: "pageDB", // database name
});

// Establish a connection to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    process.exit(1); // exit if connection fails
  }
  console.log("Connected to the MySQL database");
});

module.exports = db;
