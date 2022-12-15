import { Button } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faEarth,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">&lt;/MyBooking.com&gt;</span>
          <div className="navItems">
            <Button variant="outlined" style={{ color: "white" }}>
              List your Property
            </Button>
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>

                {/* Navlinks*/}
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerlistItems">
              <FontAwesomeIcon icon={faBed} />
              <span> Stays</span>
            </div>
            <div className="headerlistItems">
              <FontAwesomeIcon icon={faPlane} />
              <span> Flights</span>
            </div>
            <div className="headerlistItems">
              <FontAwesomeIcon icon={faCar} />
              <span> Car Rental</span>
            </div>
            <div className="headerlistItems">
              <FontAwesomeIcon icon={faEarth} />
              <span> Attraction</span>
            </div>
            <div className="headerlistItems">
              <FontAwesomeIcon icon={faTaxi} />
              <span> AirPort Taxi</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
