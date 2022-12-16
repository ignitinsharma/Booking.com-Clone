import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Hotels from "../Hotels/Hotels";
import SingleHotelPage from "../SingleHotelPage/SingleHotelPage";
import NotFound from "../NotFound/NotFound";
import Login from "../Register/Login/Login";
import Register from "../Register/Login/Register";
import Flights from "../Flights/Flights";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/hotels/:id" element={<SingleHotelPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
