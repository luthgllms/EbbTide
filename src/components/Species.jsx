// src/components/Species.jsx
import React from "react";
import "../styles/Species.scss";

const Species = React.memo(({ speciesType }) => {
  let speciesClass = "";

  switch (speciesType) {
    case "seaStar":
      speciesClass = "sea-star";
      break;
    case "seaUrchin":
      speciesClass = "sea-urchin";
      break;
    // Add more species classes as needed
  }

  return <div className={`species ${speciesClass}`}></div>;
});

export default Species;

