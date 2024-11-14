// src/App.jsx
import React, { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Graph from "./components/Graph";
import Grid from "./components/Grid";
import { initializeGrid, applyBehaviorRules, countSpecies } from "./Utils/simulationRules";
import "./styles/Main.scss";

const App = () => {
  const [gridData, setGridData] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    // Initialize the grid once when the component mounts
    const initialGrid = initializeGrid(20, 20, { seaStar: 5, seaUrchin: 10 });
    setGridData(initialGrid);
  }, []);

  useEffect(() => {
    if (isRunning) {
      // Set an interval to update the simulation every 1000 ms (adjustable)
      const interval = setInterval(() => {
        setGridData((prevGrid) => {
          const newGrid = applyBehaviorRules(prevGrid);

          // Update population data every 5 intervals (for graph updates)
          if (Math.random() < 0.2) { // 20% chance to update
            setPopulationData((prevData) => [
              ...prevData,
              { seaStar: countSpecies(newGrid, "seaStar"), seaUrchin: countSpecies(newGrid, "seaUrchin") },
            ]);
          }

          return newGrid;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setGridData(initializeGrid(20, 20, { seaStar: 5, seaUrchin: 10 }));
    setPopulationData([]);
  };

  const handleSpeciesChange = (species, count) => {
    // Logic to update species count if needed
  };

  return (
    <div className="app">
      <div className="main-grid">
        <Grid gridData={gridData} />
      </div>
      <div className="right-panel">
        <div className="controls">
          <Controls
            onStart={handleStart}
            onPause={handlePause}
            onReset={handleReset}
            onSpeciesChange={handleSpeciesChange}
          />
        </div>
        <div className="graph">
          <Graph populationData={populationData} />
        </div>
      </div>
    </div>
  );
};

export default App;

