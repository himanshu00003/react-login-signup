import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);

  return (
    <Routes>
      <Route path={apiUrl} element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;

