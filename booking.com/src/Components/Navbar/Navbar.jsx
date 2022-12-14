import { Button } from "@mui/material";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">&lt;/MyBooking.com&gt;</span>
        <div className="navItems">
          <Button variant="outlined" style={{color:"white"}}>List your Property</Button>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
