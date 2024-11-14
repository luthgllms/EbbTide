// // src/components/Grid.jsx
// import React from "react";
// import Species from "./Species";
// import "../styles/Grid.scss";

// const Grid = ({ gridData }) => {
//   if (!gridData || gridData.length === 0) {
//     return <div>Loading...</div>; // Fallback for empty grid
//   }

//   return (
//     <div className="grid">
//       {gridData.map((row, rowIndex) =>
//         row.map((species, colIndex) => (
//           <Species key={`${rowIndex}-${colIndex}`} speciesType={species} />
//         ))
//       )}
//     </div>
//   );
// };

// export default Grid;

// src/components/Grid.jsx
import React from "react";
import Species from "./Species";
import "../styles/Grid.scss";

const Grid = ({ gridData }) => {
  if (!gridData || gridData.length === 0) {
    return <div>Loading...</div>;
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




