import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  // const currentpath = window.location.pathname;
  // return <div>{currentpath === "/Signup" ? <Signup /> : <Login />}</div>
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      
    </>
    // <div>
    //   <Routes>
    //     <Route path="/" element={<Signup />} />
    //     <Route path="login" element={<Login />} />
    //   </Routes>
    // </div>
  );
}

export default App;
