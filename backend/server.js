const express = require("express"); // Import express module to create and handle server routes
const bodyParser = require("body-parser"); // Import body-parser to parse incoming JSON data in requests
const cors = require("cors"); // Import cors for allowing cross-origin resource sharing (CORS) requests
const db = require("./db"); // Import the database connection

const app = express(); 

// Middlewares
app.use(cors()); //CORS for handling requests from different origins
app.use(bodyParser.json()); // Parse incoming JSON data in the body of requests

// Post route for user signup
app.post("/signup", (req, res) => {
  const { username, password } = req.body; // Extract username and password from the request body

  if (!username || !password) {
    // Check if both username and password are provided
    return res
      .status(400) // Return 400 bad request if either username or password is missing
      .json({ message: "Please provide username and password" }); 
  }
    console.log(username);
    
  // SQL query to insert new user into the database
  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(query, [username, password], (err, result) => {
    if (err) {
      // Check if an error occurred during query execution
      console.error("Error inserting user:", err); // Log the error to the console
      return res.status(500).json({ message: "Server error" }); // Send 500 server error response
    }
    res.status(201).json({ message: "User registered successfully" }); // Send success response if the user is registered
  });
 });
    
// Post route for user login
app.post("/login", (req, res) => {
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
  db.query(query, [username], (err, result) => { // its executes the query to search for username in the database
    if (err) {
      // Check if an error occurred during query execution
      console.error("Error checking user", err); // Log the error to the console
      return res.status(500).json({ message: "Server error" }); // Send 500 server error response
    }

    if (result.length > 0) { // if thequery finds any matching user that means result is not 0 then it proceeds to check its password 
      // If user exists, compare the password directly
      const storedPassword = result[0].password; // Get the stored password

      if (password === storedPassword) {
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
const PORT = 5002; // default is 5002
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message indicating the server is running
});
