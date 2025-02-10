import React, { useState } from "react";
import axios from "axios";
import { styles } from "../templates";

const Signup = () => {
  const [name, setName] = useState(""); // state for name
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [email, setEmail] = useState(""); // state for email
  const [message, setMessage] = useState(""); // // state for message

  const handleSignup = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    if (username && password) {
      axios
        .post(`${process.env.REACT_APP_HOST}/signup`, {
          name,
          username,
          password,
          email,
        })
        .then((response) => {
          setMessage("User registered successfully!"); // // shows this message if correct
        })
        .catch((error) => {
          setMessage("Error during registration. Please try again."); //// shows this message if it catches an error
        });
    } else {
      setMessage("Please fill in all fields."); //  shows this message if any field is empty
    }
  };

  return (
    <div className={styles.pageContainer}>
      {" "}
      {/* Outer container for page */}
      <div className={styles.cardContainer}>
        {" "}
        {/* Card style form container */}
        <div className={styles.textCenter}>
          {" "}
          <h2 className={styles.loginHeader}>Sign in to your account</h2>
        </div>
        <form className={styles.formContainer} onSubmit={handleSignup}>
          {" "}
          {/* Signup form */}
          <div>
            <label className={styles.label}>Name</label>
            <div className={styles.inputContainer}>
              <input
                className={styles.input} // input field
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // Updates name state
                required
              />
            </div>
          </div>
          <div>
            <label className={styles.label}>Username</label>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Updates username state
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
                onChange={(e) => setPassword(e.target.value)} // Updates password state
                required
              />
            </div>
          </div>
          <div>
            <label className={styles.label}>Email</label>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Updates email state
                required
              />
            </div>
          </div>
          <button className={styles.button} type="submit">
            {" "}
            {/* Signup button */}
            Signup
          </button>
        </form>
        {message && <p className={styles.errorMessage}>{message}</p>}{" "}
        {/* Display message */}
        <div className="flex justify-center text-sm mt-3">
          {" "}
          {/* Link to login page */}
          <p className={styles.textColorSecondary}>
            Already have an account?{" "}
            <a className={styles.linkColor} href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
