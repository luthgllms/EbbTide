import React from "react";
import Species from "./Species";
import "../styles/Grid.scss";

const Grid = ({ gridData }) => {
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
