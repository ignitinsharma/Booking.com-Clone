import React from "react";
import "./Flights.css";
import SearchBar from "../Flights/FlightSearchBar";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import {
  faAlignJustify,
  faMagnifyingGlass,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Asia } from "../DataComponents/Asia";
import { Europe } from "../DataComponents/Europe";
import { Oceania } from "../DataComponents/Oceania";
import { Africa } from "../DataComponents/Africa";
import { NorthAmerica } from "../DataComponents/NorthAmerica";
import { TrendingCities } from "../DataComponents/TrendingCities";
import { FAQ } from "../DataComponents/FAQ";
import SmallFooter from "../Footer/SmallFooter";
import { Link } from "react-router-dom";

const Flight = () => {
  const [data, setData] = useState(Europe);
  const handleEurope = () => {
    setData(Europe);
  };
  const handleAfrica = () => {
    setData(Africa);
  };
  const handleOceania = () => {
    setData(Oceania);
  };
  const handleNorthAmerica = () => {
    setData(NorthAmerica);
  };
  const handleAsia = () => {
    setData(Asia);
  };
  return (
    <div>
      <Navbar />

      <div className="SearcHbarDiv">
        <div>
          <Heading
            style={{ fontSize: "30px", marginTop: "25px", color: "#444" }}
          >
            {" "}
            Compare and book flights with ease
          </Heading>
          <p style={{ marginTop: "18px" }}>
            Discover your next dream destination
          </p>
        </div>
        <SearchBar />
      </div>

      {/* Trending Cities Section */}

      <div className="TrendingCitiesDiv">
        <div style={{ marginTop: "60px" }}>
          <Heading>Trending Cities</Heading>
          <p style={{ color: "#474747", marginTop: "0.6rem" }}>
            Book flights to a destination popular with travelers from India
          </p>
        </div>
        {/* Maping trending data */}
        <div className="topFlights" style={{ marginTop: "20px" }}>
          {TrendingCities.map((el) => (
            <div className="DataDiv">
              <img className="topFlightsImg" src={el.image} />
              <div className="des">
                <div className="place">
                  <b className="DataDivHeading">{el.place}</b>
                </div>
                <div className="place">
                  <p
                    style={{
                      marginTop: "2px",
                      fontSize: "0.9rem",
                      color: "#474747",
                    }}
                  >
                    {el.description}
                  </p>
                  <p
                    style={{
                      marginTop: "2px",
                      fontSize: "0.9rem",
                      color: "#474747",
                    }}
                  >
                    {el.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}

      <div className="HugSectionParent">
        <div className="HugeSection">
          <div className="b1">
            <div style={{ width: "20%", height: "100%" }}>
              <FontAwesomeIcon icon={faAlignJustify} className="sicon" />
            </div>

            <div
              style={{
                width: "80%",
                height: "60%",
                paddingTop: "80px",
              }}
            >
              <b>Huge selection</b>
              <p style={{ marginTop: "10px" }}>
                Easily compare thousands of flights, all in one place
              </p>
            </div>
          </div>
          <div className="b2">
            <div style={{ width: "20%", height: "100%" }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="sicon" />
            </div>
            <div
              style={{
                width: "80%",
                height: "60%",
                paddingTop: "80px",
              }}
            >
              <b>No hidden fees</b>
              <p style={{ marginTop: "10px" }}>
                Always know exactly what you’re paying for
              </p>
            </div>
          </div>
          <div className="b3">
            <div style={{ width: "20%", height: "100%" }}>
              <FontAwesomeIcon icon={faPlaneUp} className="sicon" />
            </div>
            <div
              style={{
                width: "80%",
                height: "60%",
                paddingTop: "80px",
              }}
            >
              <b>More flexibility</b>
              <p style={{ marginTop: "10px" }}>
                Keep your travel dates open with flexible plane ticket options
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="FlyworldwideSection">
        <div>
          <Heading>Fly worldwide with Booking.com</Heading>

          <p style={{ color: "grey" }}>
            Flights from wherever you are to wherever you want to go
          </p>
        </div>
        <div className="FlyworldDataChangeOnclick">
          <button onClick={handleEurope} className="dom1">
            Europe
          </button>
          <button onClick={handleAfrica} className="dom1">
            Africa
          </button>
          <button onClick={handleOceania} className="dom1">
            Oceania
          </button>
          <button onClick={handleNorthAmerica} className="dom1">
            North America
          </button>
          <button onClick={handleAsia} className="dom1">
            Asia
          </button>
        </div>
        <div className="flyWorldwide">
          {data.map((el) => (
            <div className="flyWorldMapDataDiv">
              <img
                style={{ borderRadius: "3px" }}
                width="25%"
                height="100%"
                src={el.image}
                alt="worldWide"
              />

              <div
                style={{
                  width: "70%",
                  marginLeft: "5%",
                  height: "100%",
                }}
              >
                <div style={{ marginTop: "10px" }}>
                  <b>{el.destination}</b>
                </div>
                <div style={{ marginTop: "18px" }}>
                  <p style={{ color: "grey" }}> {el.flighttime} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "50px" }}>
          <Heading>Frequently asked questions</Heading>
        </div>
        {/* Faq Section */}
        <div className="faqSection">
          {FAQ.map((ele) => (
            <div className="faqSecDiv">
              <h3 style={{ fontWeight: "700" }}>{ele.heading}</h3>
              <p>{ele.description}</p>
            </div>
          ))}
        </div>
      </div>
      <SmallFooter />
    </div>
  );
};

export default Flight;
