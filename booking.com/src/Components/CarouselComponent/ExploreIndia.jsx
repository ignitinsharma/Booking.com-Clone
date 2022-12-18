import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ExploreIndia.css";
import { HotelData } from "../DataComponents/HotelData";

const ExploreIndia = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="ExploreMain">
      <Carousel responsive={responsive} transitionDuration={1000}>
        {HotelData.map((el) => {
          return (
            <div className="ExploreDiv">
              <img className="ExploreDivImg" src={el.url} alt="" />
              <h1 className="Exploreh1">{el.city}</h1>
              <p style={{ color: "#6b6b6b" }}>{el.reviews} reviews</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ExploreIndia;
