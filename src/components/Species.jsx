import React from "react";
import { speciesTypes } from "../Utils/simulationRules";
import "../styles/Species.scss";

const Species = ({ speciesType }) => {
  let speciesClass = "";
  switch (speciesType) {
    case speciesTypes.SEA_STAR:
      speciesClass = "sea-star";
      break;
    case speciesTypes.SEA_URCHIN:
    case speciesTypes.HERMIT_CRAB:
      speciesClass = "herbivore";
      break;
    case speciesTypes.MUSSEL:
      speciesClass = "filter-feeder";
      break;
    case speciesTypes.SEA_ANEMONE:
      speciesClass = "anemone";
      break;
    case speciesTypes.ALGAE:
      speciesClass = "algae";
      break;
    default:
      speciesClass = "";
  }

  return <div className={`species ${speciesClass}`}></div>;
};

export default Species;
