import { ButtonGroup, Tab } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { React, useState } from "react";
import "./DestinationWeLove.css";
import {
  Region,
  Cities,
  Interest,
} from "../DataComponents/Region_CIty_Interest";

const DestinationWeLove = () => {
  const [pagesData, setPagesData] = useState(Region);

  return (
    <div className="DestinationWeLoveDiv">
      <Heading>Destinations we love</Heading>

      <div className="DestinationWeLoveButtonsDiv">
        <button
          onClick={() => setPagesData(Region)}
          className="DestinationButtons"
        >
          Region
        </button>
        <button
          onClick={() => setPagesData(Cities)}
          className="DestinationButtons"
        >
          Cities
        </button>
        <button
          onClick={() => setPagesData(Interest)}
          className="DestinationButtons"
        >
          Place of Interest
        </button>
      </div>
      <div className="DestinationMapDiv">
        {pagesData.map((el) => (
          <div className="DestinationMapData">
            <h1 className="DestinationMapDataH1">{el.name}</h1>
            <h2 className="DestinationMapDataH2">{el.properties}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationWeLove;
