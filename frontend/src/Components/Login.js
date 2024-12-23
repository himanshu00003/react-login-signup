// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState(""); // state variable for username
//   const [password, setPassword] = useState(""); // state variable for password
//   const [message, setMessage] = useState(""); // state variable for message

//   const handleLogin = (e) => {
//     // function for login submission
//     e.preventDefault(); // prevents default form submission (page reload)
//     if (username && password) {
//       // if username and password are correct post sends request through axios along with username and password
//       axios
//         .post("https://localhost:5002/login", { username, password })
//         .then((response) => {
//           setMessage("Login Successful"); // server responds with this message
//         })
//         .catch((error) => {
//           setMessage("Wrong Credentials"); // if invalid credentials
//         });
//     } else {
//       setMessage("Please fill in all fields."); // if either is empty
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username} // value state is bound to username state
//             onChange={(e) => setUsername(e.target.value)} // onchange updates whenever input changes
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password} // value is bound to password state
//             onChange={(e) => setPassword(e.target.value)} // onchange updates whenever input changes
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [message, setMessage] = useState(""); // state for message

  const handlelogin = (e) => {
    // function to handle form submission
    e.preventDefault(); // prevent default form submission
    if (username && password) {
      // if username and password are correct
      axios
        .post("http://localhost:5002/login", { username, password }) // then send post request to backend with username and password
        .then((response) => {
          setMessage("Login Successful"); // shows this message if correct
        })
        .catch((error) => {
          setMessage("Error during Login. Please try again."); // shows this message if it catches an error
        });
    } else {
      setMessage("Please fill in all fields."); // shows this message if any field is empty
    }
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handlelogin}>
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
        <button type="submit">login</button>
      </form>
      {message && <p>{message}</p>}
      
    </div>
  );
};

export default Login;
