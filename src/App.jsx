// // src/App.jsx
// import React, { useState, useEffect } from "react";
// import Controls from "./components/Controls";
// import Graph from "./components/Graph";
// import Grid from "./components/Grid";
// import { initializeGrid, applyBehaviorRules, countSpecies } from "./Utils/simulationRules";
// import "./styles/Main.scss";

// const App = () => {
//   const [gridData, setGridData] = useState([]);
//   const [isRunning, setIsRunning] = useState(false);
//   const [populationData, setPopulationData] = useState([]);
//   const [seaStarCount, setSeaStarCount] = useState(5);
//   const [seaUrchinCount, setSeaUrchinCount] = useState(10);

//   useEffect(() => {
//     const initialGrid = initializeGrid(20, 20, { seaStar: seaStarCount, seaUrchin: seaUrchinCount });
//     setGridData(initialGrid);
//   }, [seaStarCount, seaUrchinCount]);

//   useEffect(() => {
//     if (isRunning) {
//       const interval = setInterval(() => {
//         setGridData((prevGrid) => {
//           const newGrid = applyBehaviorRules(prevGrid);
//           return newGrid;
//         });
//       }, 500); // Update every 500 ms for smoother interaction animation

//       return () => clearInterval(interval);
//     }
//   }, [isRunning]);

//   const handleStart = () => setIsRunning(true);
//   const handlePause = () => setIsRunning(false);
//   const handleReset = () => {
//     const resetGrid = initializeGrid(20, 20, { seaStar: seaStarCount, seaUrchin: seaUrchinCount });
//     setGridData(resetGrid);
//     setPopulationData([]);
//   };

//   return (
//     <div className="app">
//       <div className="main-grid">
//         <Grid gridData={gridData} />
//       </div>
//       <div className="right-panel">
//         <div className="controls">
//           <Controls
//             onStart={handleStart}
//             onPause={handlePause}
//             onReset={handleReset}
//           />
//         </div>
//         <div className="graph">
//           <Graph populationData={populationData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

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
  const [seaStarCount, setSeaStarCount] = useState(5);
  const [seaUrchinCount, setSeaUrchinCount] = useState(10);

  useEffect(() => {
    const initialGrid = initializeGrid(20, 20, { seaStar: seaStarCount, seaUrchin: seaUrchinCount });
    setGridData(initialGrid);
  }, [seaStarCount, seaUrchinCount]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setGridData((prevGrid) => {
          const newGrid = applyBehaviorRules(prevGrid);

          // Update populationData for the graph every interval
          setPopulationData((prevData) => [
            ...prevData,
            {
              seaStar: countSpecies(newGrid, "seaStar"),
              seaUrchin: countSpecies(newGrid, "seaUrchin"),
            },
          ]);

          return newGrid;
        });
      }, 1000); // Update every second

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    const resetGrid = initializeGrid(20, 20, { seaStar: seaStarCount, seaUrchin: seaUrchinCount });
    setGridData(resetGrid);
    setPopulationData([]); // Clear population data on reset
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





