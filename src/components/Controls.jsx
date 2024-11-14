// src/components/Controls.jsx
import React, { useState } from "react";
import "../styles/Controls.scss";

const Controls = ({ onStart, onPause, onReset, onSpeciesChange }) => {
  const [seaStarInput, setSeaStarInput] = useState(5);
  const [seaUrchinInput, setSeaUrchinInput] = useState(10);

  const handleSeaStarChange = (e) => {
    setSeaStarInput(e.target.value);
    onSpeciesChange("seaStar", e.target.value);
  };

  const handleSeaUrchinChange = (e) => {
    setSeaUrchinInput(e.target.value);
    onSpeciesChange("seaUrchin", e.target.value);
  };

  return (
    <div className="controls">
      <h2>Simulation Controls</h2>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onReset}>Reset</button>

      <h3>Adjust Species Count</h3>
      <label>
        Sea Stars:
        <input
          type="number"
          value={seaStarInput}
          onChange={handleSeaStarChange}
        />
      </label>
      <label>
        Sea Urchins:
        <input
          type="number"
          value={seaUrchinInput}
          onChange={handleSeaUrchinChange}
        />
      </label>
    </div>
  );
};

export default Controls;


