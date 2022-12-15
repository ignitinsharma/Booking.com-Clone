import React from "react";
import "./FeatureList.css";

const FeatureList = () => {
  return (
    <div className="featured">
      <div className="OneImageSection">
        <div className="featuredItemOne">
          <img
            src="https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o"
            alt=""
            className="featuredImgOne"
          />
          <div className="featuredTitlesOne">
            <h1>Mumbai</h1>
            <h2>532 properties</h2>
          </div>
        </div>
      </div>

      <div className="TwoimageSection">
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140050975.jpg?k=199651add50b8eada9c51b9f5bde5b2a85d676fda6298c5f5455c99ffea23aad&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <span className="featuredTitlesSpanMain">Italy</span> <br />
            <span className="featuredTitlesSpan">235 properties</span>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
          <span className="featuredTitlesSpanMain">Reno</span> <br />
            <span className="featuredTitlesSpan">235 properties</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeatureList;
