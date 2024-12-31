const mysql = require("mysql2");
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Use the host from the .env file
  user: process.env.DB_USER, // Use the user from the .env file
  password: process.env.DB_PASSWORD, // Use the password from the .env file
  database: process.env.DB_NAME, // Use the database name from the .env file
  port: process.env.DB_PORT || 3306,
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
