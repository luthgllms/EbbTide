import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import { speciesTypes } from "./Utils/simulationRules";
import "./styles/Main.scss";

const App = () => {
  const [gridData, setGridData] = useState(
    Array(20).fill().map(() => Array(20).fill(speciesTypes.ALGAE))
  );

  useEffect(() => {
    // Initialize grid with random species as an example
    const initialGrid = gridData.map(row =>
      row.map(() => {
        const species = [
          speciesTypes.SEA_STAR,
          speciesTypes.SEA_URCHIN,
          speciesTypes.MUSSEL,
          speciesTypes.SEA_ANEMONE,
          speciesTypes.ALGAE
        ];
        return species[Math.floor(Math.random() * species.length)];
      })
    );
    setGridData(initialGrid);
  }, []);

  return (
    <div>
      <Controls />
      <Grid gridData={gridData} />
    </div>
  );
};

export default App;

