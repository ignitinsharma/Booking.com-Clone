import React from "react";
import "./FeatureList.css";

const FeatureList = () => {
  return (
    <div className="ParentFetured">
      <div className="featured">
        <div className="OneImageSection">
          <div className="featuredItemOne">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o"
              alt=""
              className="featuredImgOne"
            />
            <div className="featuredTitlesOne">
              <h1 className="MumbaiH1">Mumbai</h1>
              <h2 className="MumbaiH2">532 properties</h2>
            </div>
          </div>
        </div>

        <div className="TwoimageSection">
          <div className="featuredItem">
            <img
              src="https://www.etextilemagazine.com/wp-content/uploads/2019/02/italya-1.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <span className="featuredTitlesSpanMain">Rome, Italy</span> <br />
              <span className="featuredTitlesSpan">235 properties</span>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/city/square210/654657.jpg?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <span className="featuredTitlesSpanMain">Istanbul, Turkey</span>{" "}
              <br />
              <span className="featuredTitlesSpan">235 properties</span>
            </div>
          </div>
        </div>
      </div>

      <div className="GridThreeSection">
        <div className="featuredItemGrid">
          <img
            src="https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o="
            alt=""
            className="featuredImgGrid"
          />
          <div className="featuredTitlesGrid">
            <h1 className="SecondTitleH1">London, UK</h1>
            <h3 className="SecondTitleH3">123 properties</h3>
          </div>
        </div>

        <div className="featuredItemGrid">
          <img
            src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F9fcda278-32a5-408a-88e2-c09b7f9dddd9.png?fit=scale-down&source=next&width=700"
            alt=""
            className="featuredImgGrid"
          />
          <div className="featuredTitlesGrid">
            <h1 className="SecondTitleH1">Vienna, Austria</h1>
            <h3 className="SecondTitleH3">456 properties</h3>
          </div>
        </div>
        <div className="featuredItemGrid">
          <img
            src="https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-Fotolia.jpg"
            alt=""
            className="featuredImgGrid"
          />
          <div className="featuredTitlesGrid">
            <h1 className="SecondTitleH1">Paris, France</h1>
            <h3 className="SecondTitleH3">435 properties</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
