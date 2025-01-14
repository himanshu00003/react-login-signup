import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [welcomeMessage, setWelcomeMessage] = useState(""); // state for welcome message
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state to track if the user is logged in

  const handleLogin = (e) => {
    e.preventDefault(); // prevent default form submission
    if (username && password) {
      axios
        .post(`${process.env.REACT_APP_HOST}/login`, { username, password })
        .then((response) => {
          setWelcomeMessage(`Welcome ${username}`); // set welcome message
          setIsLoggedIn(true); // user is now logged in
        })
        .catch((error) => {
          setWelcomeMessage("Error during Login. Please try again."); // set error message
        });
    } else {
      setWelcomeMessage("Please fill in all fields."); // set error message if any field is empty
    }
  };

  const handleLogout = () => { // Logout 
    setIsLoggedIn(false); 
    setUsername("");
    setPassword("");
    setWelcomeMessage("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>{welcomeMessage}</h2> 
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
