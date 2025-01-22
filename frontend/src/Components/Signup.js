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
    <div className="min-h-screen flex justify-center items-center bg-[#101828] ">
      <div className=" p-6 px-9 rounded-xl w-4/12">
        <div className="flex justify-center">
          <h2 className="text-3xl my-4 text-[#ffffdc]">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-3  " onSubmit={handleSignup}>
          <div>
            <label className=" text-[#ffffdc]">Name</label>
            <div className="mt-[5px]">
              <input
                className="w-full bg-[#1c2433] rounded-lg  text-gray-100 p-2"
                type="text"
                value={name} // value bound to name state
                onChange={(e) => setName(e.target.value)} // update name state
                required
              />
            </div>
          </div>
          <div>
            <label className=" text-[#ffffdc]">Username</label>
            <div className="mt-[5px]">
              <input
                className="w-full bg-[#1c2433] rounded-lg  text-gray-100 p-2"
                type="text"
                value={username} // value state is bound to username state
                onChange={(e) => setUsername(e.target.value)} // onchange updates whenever input changes
                required
              />
            </div>
          </div>
          <div>
            <label className=" text-[#ffffdc]">Password</label>
            <div className="mt-[5px]">
              <input
                className="w-full bg-[#1c2433] rounded-lg  text-gray-100 p-2"
                type="password "
                value={password} // value is bound to password state
                onChange={(e) => setPassword(e.target.value)} // onchange updates whenever input changes
                required
              />
            </div>
          </div>
          <div>
            <label className=" text-[#ffffdc] ">Email</label>
            <div className="mt-[5px]">
              <input
                className="w-full bg-[#1c2433] rounded-lg text-gray-100 p-2"
                type="email"
                value={email} // value bound to email state
                onChange={(e) => setEmail(e.target.value)} // update email state
                required
              />
            </div>
          </div>
          <button
            className="border-2 py-2 font-semibold border-black w-full rounded-lg bg-[#615fff]"
            type="submit"
          >
            Signup
          </button>
        </form>
        {message && <p>{message}</p>}
        <div className="flex justify-center text-sm mt-3">
          <p className="text-[#7a8995] ">
            Already have an account?{" "}
            <a className="text-[#615fff]" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
