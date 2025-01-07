const express = require("express"); // Import express module to create and handle server routes
const bodyParser = require("body-parser"); // Import body-parser to parse incoming JSON data in requests
const cors = require("cors"); // Import cors for allowing cross-origin resource sharing (CORS) requests
require("dotenv").config();
const db = require("./db"); // Import the database connection
const bcrypt = require("bcrypt")
const { sendEmail } = require("./nodemailer");

const app = express();
// Middlewares
app.use(cors()); //CORS for handling requests from different origins

app.use(bodyParser.json()); // Parse incoming JSON data in the body of requests

app.get("/", (req, res) => {
  res.send("Hello working");
});
// Post route for user signup
app.post("/signup", async (req, res) => {
  const { username, password } = req.body; // Extract username and password from the request body

  // Validate if both username and password are provided
  if (!username || !password) {
    return res
      .status(400) // Return 400 bad request status code if validation fails
      .json({ message: "Please provide username and password" }); // Respond with an error message
  }

  try {
    // Hash the password with bcrypt to securely store it
    const saltRounds = 10; // The number of salt rounds determines the complexity of the hash
    const hashedPassword = await bcrypt.hash(password, saltRounds); // Generate the hashed password

    // SQL query to insert the new user into the database with the hashed password
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(query, [username, hashedPassword], (err, result) => {
      if (err) {
        // Handle errors during database operations
        console.error("Error inserting user:", err); // Log the error for debugging
        return res.status(500).json({ message: "Server error" }); // Send a 500 server error response
      }
      try {
        sendEmail(username, username);
      } catch (err) {
        console.log("Failed to send email", err);
        
      }
      


      // Send a success response if the user is registered successfully
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    // Handle errors that occur during the password hashing process
    console.error("Error hashing password:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error" }); // Send a 500 server error response
  }
});

// Post route for user login
app.post("/login", async (req, res) => {
  const { username, password } = req.body; // Extract username and password from the request body
  console.log(username); // for debugging

  if (!username || !password) {
    // Check if both username and password are provided
    return res
      .status(400) // Return 400 bad request if either username or password is missing
      .json({ message: "Please provide username and password" }); // Send error message in response
  }

  // SQL query to check if the user credentials exist in the database
  const query = `SELECT * FROM users WHERE username = ?`; // check if the user with provided username exists in users or not
  db.query(query, [username], async (err, result) => {
    // its executes the query to search for username in the database
    if (err) {
      // Check if an error occurred during query execution
      console.error("Error checking user", err); // Log the error to the console
      return res.status(500).json({ message: "Server error" }); // Send 500 server error response
    }

    if (result.length > 0) {
      // if theq uery finds any matching user that means result is not 0 then it proceeds to check its password
      // If user exists, compare the password directly
      const storedPassword = result[0].password; // Get the stored password

      const isPasswordMatch = await bcrypt.compare(password, storedPassword);

      if (isPasswordMatch) {
        // If the passwords match
        res.status(200).json({ message: "Login Successful" });
      } else {
        // If the passwords don't match
        res.status(401).json({ message: "Invalid Credentials" });
      }
    } else {
      // If no user is found
      res.status(401).json({ message: "Invalid Credentials" });
    }
  });
});

// Start the server

const BACKEND_PORT = process.env.BACKEND_PORT || 5002; // default is 5002
app.listen(BACKEND_PORT, () => {
  console.log(`Server is running on port ${BACKEND_PORT}`); // Log a message indicating the server is running
});
