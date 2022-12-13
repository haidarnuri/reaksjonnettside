import React from "react";
import "./App.css";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
