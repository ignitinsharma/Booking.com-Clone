import React, { useState } from "react";
import "./Header.css";
import {Button} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDay,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // For Date section Css
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns"; // Convert JS date into Readable Format
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [opendate, setOpendate] = useState(false);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [room, setRoom] = useState(1);
  const [Openbooking, setOpenbooking] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });
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
              <span
                onClick={() => setOpenbooking(!Openbooking)}
                className="headersearchtext"
              >{`${adult} adult · ${child} children · ${room} room`}</span>

              {Openbooking ? (
                <div className="option">
                  <div className="optionItem">
                    <span className="OptionText">Adult</span>
                    <div className="OptionButtons">
                      <button
                        className="optionBtn"
                        disabled={adult == 0}
                        onClick={() => setAdult(adult - 1)}
                      >
                        -
                      </button>
                      <span className="CounterNumber">{adult}</span>
                      <button
                        className="optionBtn"
                        onClick={() => setAdult(adult + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="OptionText">Children</span>
                    <div className="OptionButtons">
                      <button
                        className="optionBtn"
                        disabled={child == 0}
                        onClick={() => setChild(child - 1)}
                      >
                        -
                      </button>
                      <span className="CounterNumber">{child}</span>
                      <button
                        className="optionBtn"
                        onClick={() => setChild(child + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="OptionText">Room</span>
                    <div className="OptionButtons">
                      <button
                        className="optionBtn"
                        disabled={room == 0}
                        onClick={() => setRoom(room - 1)}
                      >
                        -
                      </button>
                      <span className="CounterNumber">{room}</span>
                      <button
                        className="optionBtn"
                        onClick={() => setRoom(room + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="headerSearchItems">
              <Button colorScheme="teal" size="xs">
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
