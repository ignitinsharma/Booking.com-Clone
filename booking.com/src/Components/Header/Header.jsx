import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDay,
  faCar,
  faEarth,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // For Date section Css
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns"; // Convert JS date into Readable Format

const Header = () => {
  const [opendate, setOpendate] = useState(true);
  /* --> We are using for Managing date range what is the start date and what is
      the end date. */
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
      <br />
      {/* === Header Search Bar area === */}
      <div className="HeaderSeachmain">
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
              <FontAwesomeIcon className="headerIcons" icon={faCalendarDay} />
              {/* 
              --> Here we are simple taking data form Date varibale and showing
              on that format dd.mm.yyyy
              
              On that onclick function i'm simply toggle value if value is true 
              so make false if false so make true
            */}
              <span
                onClick={() => setOpendate(!opendate)}
                className="headersearchtext"
              >{`${format(date[0].startDate, "dd.MM.yyyy")} to ${format(
                date[0].endDate,
                "dd.MM.yyyy"
              )}`}</span>

              {/* Here we are using React date range Library
                for Better Ui and updating therir state by onChange
                
                
                And then according to condition im rendering that Date Ui 
              */}
              {opendate ? (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="DateSection"
                />
              ) : null}
            </div>
            <div className="headerSearchItems">
              <FontAwesomeIcon className="headerIcons" icon={faPerson} />
              <span className="headersearchtext">
                2 adult 2 children 1 room
              </span>
            </div>
            <div className="headerSearchItems">
              <Button variant="contained" style={{ backgroundColor: "#0071c" }}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
