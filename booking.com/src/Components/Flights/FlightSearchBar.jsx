import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";
import "./FlightSearchBar.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const FlightSearchBar = () => {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  return (
    <div>
      <div className="radio">
        <div>
          <input name="type" type="radio" value="1" defaultChecked />
          <label style={{ marginLeft: "8px" }}>Round-trip</label>
        </div>
        <div>
          <input name="type" type="radio" value="2" />
          <label style={{ marginLeft: "8px" }}>One-way</label>
        </div>
        <div>
          <input name="type" type="radio" value="3" />
          <label style={{ marginLeft: "8px" }}>Multi-city</label>
        </div>
        <select style={{ marginTop: "-6px" }}>
          <option value="">Economy</option>
          <option value=""> Premium Economy</option>
          <option value="">Business</option>
          <option value=""> First Class</option>
        </select>
        <select style={{ marginTop: "-6px" }}>
          <option value="">1 Adult</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <div className="searchBox">
        <div className="input1">
          <div style={{ marginLeft: "10px", marginTop: "10px", width: "10%" }}>
            <FontAwesomeIcon icon={faPlaneDeparture} className="PlaneIcon" />
          </div>
          <div style={{ width: "90%" }}>
            <input
              type="text"
              placeholder="Where From?"
              className="fromwhere"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              style={{ paddingLeft: "15px" }}
            />
          </div>
        </div>
        <div className="input2">
          <input
            type="text"
            placeholder="Where To?"
            className="fromwhere"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            style={{ paddingLeft: "15px" }}
          />
        </div>
        <div className="date1">
          <input type="date" className="dep" />
        </div>
        <div className="date2">
          <input type="date" className="dep" />
        </div>
        <Link to={'/flightoptions'}>
          <div className="searchButton">
          <Button
                style={{ backgroundColor: "#0071C2", color: "white" }}
                colorScheme="teal"
                variant="contained"
                size="lg"
                onClick={() => alert("Wait a Second 😁")}
              >
                Search
              </Button>
          </div>
        </Link>
        {/* </Link> */}
      </div>

      <div style={{ marginTop: "15px" }}>
        <input style={{ marginRight: "1rem" }} type="checkbox" />
        <label>Direct Flights only</label>
      </div>
    </div>
  );
};

export default FlightSearchBar;
