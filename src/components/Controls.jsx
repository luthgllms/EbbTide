import React, { useState } from "react";
import "../styles/Controls.scss";

const Controls = ({ onStart, onPause, onReset, onSpeciesChange, onEventTrigger }) => {
  const [seaStarCount, setSeaStarCount] = useState(5);
  const [seaUrchinCount, setSeaUrchinCount] = useState(10);

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
          value={seaStarCount}
          onChange={(e) => {
            setSeaStarCount(e.target.value);
            onSpeciesChange("seaStar", e.target.value);
          }}
        />
      </label>
      <label>
        Sea Urchins:
        <input
          type="number"
          value={seaUrchinCount}
          onChange={(e) => {
            setSeaUrchinCount(e.target.value);
            onSpeciesChange("seaUrchin", e.target.value);
          }}
        />
      </label>

      <h3>Environmental Events</h3>
      <button onClick={() => onEventTrigger("hurricane")}>Trigger Hurricane</button>
      <button onClick={() => onEventTrigger("pollution")}>Increase Pollution</button>
    </div>
  );
};

export default Controls;
