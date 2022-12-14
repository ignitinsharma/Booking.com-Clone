import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Hotels from "../Hotels/Hotels";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import SignUp from "../SignUp/SignUp";
import SingleHotelPage from "../SingleHotelPage/SingleHotelPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:id" element={<SingleHotelPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
