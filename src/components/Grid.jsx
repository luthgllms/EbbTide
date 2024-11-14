import React from "react";
import Species from "./Species";
import "../styles/Grid.scss";

const Grid = ({ gridData }) => {
  // Check if gridData is empty or undefined, and return a fallback if so
  if (!gridData || gridData.length === 0) {
    return <div>Loading...</div>; // Display loading or placeholder message
  }

  return (
    <div className="grid">
      {gridData.map((row, rowIndex) =>
        row.map((species, colIndex) => (
          <Species key={`${rowIndex}-${colIndex}`} speciesType={species} />
        ))
      )}
    </div>
  );
};

export default Grid;

