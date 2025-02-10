import React, { useState } from "react";
import axios from "axios";
import { styles } from "../templates";

const Login = () => {
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [welcomeMessage, setWelcomeMessage] = useState(""); // state for welcome message
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state to track if the user is logged in

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
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

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setUsername(""); 
    setPassword(""); 
    setWelcomeMessage(""); 
  };

  return (
    <div className={styles.pageContainer}>
      {" "}
      {/* Main container */}
      {isLoggedIn ? (
        <div className={styles.cardContainer}>
          {" "}
          {/* Logged-in */}
          <h2 className={styles.welcomeMessage}>{welcomeMessage}</h2>
          <button onClick={handleLogout} className={styles.button}>
            {" "}
            {/* Logout button */}
            Logout
          </button>
        </div>
      ) : (
        <div className={styles.cardContainer}>
          {" "}
          {/* Login form container */}
          <div className={styles.textCenter}>
            <h2 className={styles.loginHeader}>Login to your account</h2>
          </div>
          <form className={styles.formContainer} onSubmit={handleLogin}>
            {" "}
            {/* Login form */}
            <div>
              <label className={styles.label}>Username</label>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className={styles.label}>Password</label>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button className={styles.button} type="submit">
              {" "}
              {/* Login button */}
              Login
            </button>
          </form>
          {welcomeMessage && (
            <p className={styles.errorMessage}>{welcomeMessage}</p>
          )}
          <div className="flex justify-center text-sm mt-3">
            {" "}
            {/* Signup link */}
            <p className={styles.textColorSecondary}>
              Don't have an account?{" "}
              <a className={styles.linkColor} href="/">
                Signup
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
