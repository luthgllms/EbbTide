import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ populationData }) => {
  const chartData = {
    labels: populationData.map((_, index) => index),
    datasets: [
      {
        label: "Sea Stars",
        data: populationData.map(data => data.seaStar),
        borderColor: "coral",
        fill: false,
      },
      {
        label: "Sea Urchins",
        data: populationData.map(data => data.seaUrchin),
        borderColor: "green",
        fill: false,
      },
      // Add other species here
    ],
  };

  return (
    <div className="graph">
      <h2>Population Dynamics</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Graph;

