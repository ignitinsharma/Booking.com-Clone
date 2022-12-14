import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
      <Route to="login/" element={<Home />} />
      <Route to="/signup" element={<Home />} />
      <Route to="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
