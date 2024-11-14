import React, { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Graph from "./components/Graph";
import Grid from "./components/Grid";
import { initializeGrid, applyBehaviorRules } from "./Utils/simulationRules";
import "./styles/Main.scss";

const App = () => {
  const [gridData, setGridData] = useState([]);  // Initialize as an empty array
  const [isRunning, setIsRunning] = useState(false);
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const initialGrid = initializeGrid(20, 20, { seaStar: 5, seaUrchin: 10 });
    setGridData(initialGrid);  // Set the grid data once initialized
  }, []);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setGridData(prevGrid => applyBehaviorRules(prevGrid));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    const resetGrid = initializeGrid(20, 20, { seaStar: 5, seaUrchin: 10 });
    setGridData(resetGrid);
    setPopulationData([]);
  };

  const handleSpeciesChange = (species, count) => {
    // Update species count logic if needed
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
