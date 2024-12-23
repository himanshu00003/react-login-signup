import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [message, setMessage] = useState(""); // state for message

  const handleSignup = (e) => {
    // function to handle form submission
    e.preventDefault(); // prevent default form submission
    if (username && password) {
      // if username and password are correct
      axios
        .post("http://localhost:5002/signup", { username, password }) // then send post request to backend with username and password
        .then((response) => {
          setMessage("User registered successfully!"); // shows this message if correct
        })
        .catch((error) => {
          setMessage("Error during registration. Please try again."); // shows this message if it catches an error
        });
    } else {
      setMessage("Please fill in all fields."); // shows this message if any field is empty
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username} // value state is bound to username state
            onChange={(e) => setUsername(e.target.value)} // onchange updates whenever input changes
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password} // value is bound to password state
            onChange={(e) => setPassword(e.target.value)} // onchange updates whenever input changes
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
