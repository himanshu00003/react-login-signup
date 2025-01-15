import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState(""); // state for name
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // state for message
  
  const handleSignup = (e) => {
    e.preventDefault(); // prevent default form submission
    if (username && password) {
      axios
        .post(`${process.env.REACT_APP_HOST}/signup`, {
          name,
          username,
          password,
          email,
        })
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
          <label>Name:</label>
          <input
            type="text"
            value={name} // value bound to name state
            onChange={(e) => setName(e.target.value)} // update name state
            required
          />
        </div>
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
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email} // value bound to email state
            onChange={(e) => setEmail(e.target.value)} // update email state
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
