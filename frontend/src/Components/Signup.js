import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState(""); // state for name
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [email, setEmail] = useState(""); // state for email
  const [message, setMessage] = useState(""); // state for message

  const handleSignup = (e) => {
    e.preventDefault(); // prevent default form submission
    if (name && username && password && email) {
      // check if all fields are filled
      axios
        .post(`${process.env.REACT_APP_HOST}/signup`, {
          name, // send name to backend
          username, // send username to backend
          password, // send password to backend
          email, // send email to backend
        })
        .then((response) => {
          setMessage("User registered successfully!"); // success message
        })
        .catch((error) => {
          setMessage("Error during registration. Please try again."); // error message
        });
    } else {
      setMessage("Please fill in all fields."); // validation message if fields are empty
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name} // bind input to name state
            onChange={(e) => setName(e.target.value)} // update name state
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username} // bind input to username state
            onChange={(e) => setUsername(e.target.value)} // update username state
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password} // bind input to password state
            onChange={(e) => setPassword(e.target.value)} // update password state
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email} // bind input to email state
            onChange={(e) => setEmail(e.target.value)} // update email state
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>} {/* display message */}
      <p>
        Already have an account? <a href="/login">Login</a>{" "}
        {/* link to login page */}
      </p>
    </div>
  );
};

export default Signup;
