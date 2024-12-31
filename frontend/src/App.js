import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
