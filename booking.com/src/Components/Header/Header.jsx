import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDay,
  faCalendarWeek,
  faCar,
  faEarth,
  faFaceSmile,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="Parent">
      {/*=== Navbar section ===*/}

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

      {/* === Header Image  section === */}
      <div className="headerSection">
        <img
          className="headerImage"
          src="https://q-xx.bstatic.com/xdata/images/xphoto/2880x750/183939625.jpeg?k=f06b6ea8458f9377cc1293e39f6b3218d13c4a6576d61d51b989438e667d68fc&o="
          alt=""
        />
        <div className="contentImg">
          <h1 className="imgsectionH1">
            The joy of home anywhere in the world
          </h1>
          <p className="ImgsectionPTag">Easy booking, easy living</p>
        </div>
      </div>

      {/* === Header Search Bar area === */}
      <br />
      <div className="headerSearchParent">
        <div className="headerSearch">
          <div className="headerSearchItems">
            <FontAwesomeIcon className="headerIcons" icon={faBed} />
            <input
              className="headerSearchInput"
              type="text"
              placeholder="Where are you going.?"
            />
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon
              className="headerIcons"
              style={{ color: "white" }}
              icon={faCalendarDay}
            />
            <span className="headersearchtext">date to date</span>
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon className="headerIcons" icon={faPerson} />
            <span className="headersearchtext">2 adult 2 children 1 room</span>
          </div>
          <div className="headerSearchItems">
            <Button variant="contained" style={{backgroundColor:'#0071c'}}>Search</Button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Header;
