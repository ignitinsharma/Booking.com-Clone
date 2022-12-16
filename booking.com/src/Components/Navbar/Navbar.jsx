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
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">&lt;/MyBooking.com&gt;</span>
          <div className="navItems">
            <Button style={{ color: "white" }}  _hover={{backgroundColor:"#003590"}} variant="outline">
              List your Property
            </Button>
            <Button className="navButton" variant="solid">
            Register
            </Button>
            <Button className="navButton" style={{ color: "black" }} variant="solid">
            Login
            </Button>
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
