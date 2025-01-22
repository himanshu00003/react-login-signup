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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setWelcomeMessage("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#101828]">
      {isLoggedIn ? (
        <div className="p-6 px-9 rounded-xl w-4/12 bg-[#1c2433] text-[#ffffdc] text-center">
          <h2 className="text-2xl my-4">{welcomeMessage}</h2>
          <button
            onClick={handleLogout}
            className="border-2 py-2 font-semibold border-black w-full rounded-lg bg-[#615fff] text-gray-100"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="p-6 px-9 rounded-xl w-4/12">
          <div className="flex justify-center">
            <h2 className="text-3xl my-4 text-[#ffffdc]">
              Login to your account
            </h2>
          </div>
          <form className="space-y-3" onSubmit={handleLogin}>
            <div>
              <label className="text-[#ffffdc]">Username</label>
              <div className="mt-[5px]">
                <input
                  className="w-full bg-[#1c2433] rounded-lg text-gray-100 p-2"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-[#ffffdc]">Password</label>
              <div className="mt-[5px]">
                <input
                  className="w-full bg-[#1c2433] rounded-lg text-gray-100 p-2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className="border-2 py-2 font-semibold border-black w-full rounded-lg bg-[#615fff] text-gray-100"
              type="submit"
            >
              Login
            </button>
          </form>
          {welcomeMessage && (
            <p className="mt-3 text-center text-[#7a8995]">{welcomeMessage}</p>
          )}
          <div className="flex justify-center text-sm mt-3">
            <p className="text-[#7a8995]">
              Don't have an account?{" "}
              <a className="text-[#615fff]" href="/signup">
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
