// // src/utils/simulationLogic.js

// // Initialize the grid with given species counts
// export function initializeGrid(rows, cols, speciesCounts) {
//     const grid = Array(rows)
//       .fill(null)
//       .map(() => Array(cols).fill(null));
  
//     for (let i = 0; i < speciesCounts.seaStar; i++) {
//       placeRandomly(grid, "seaStar");
//     }
//     for (let i = 0; i < speciesCounts.seaUrchin; i++) {
//       placeRandomly(grid, "seaUrchin");
//     }
  
//     return grid;
//   }
  
//   function placeRandomly(grid, speciesType) {
//     let placed = false;
//     while (!placed) {
//       const row = Math.floor(Math.random() * grid.length);
//       const col = Math.floor(Math.random() * grid[0].length);
//       if (!grid[row][col]) {
//         grid[row][col] = speciesType;
//         placed = true;
//       }
//     }
//   }
  
//   // Apply behavior rules to create interactions
//   export function applyBehaviorRules(grid) {
//     const updatedGrid = grid.map((row) => row.slice());
  
//     for (let row = 0; row < grid.length; row++) {
//       for (let col = 0; col < grid[row].length; col++) {
//         const species = grid[row][col];
  
//         // Only apply movement rules for sea stars (predators)
//         if (species === "seaStar") {
//           moveTowardPrey(grid, updatedGrid, row, col, "seaUrchin");
//         }
//       }
//     }
  
//     return updatedGrid;
//   }
  
//   // Move predator towards the nearest prey if within range
//   function moveTowardPrey(grid, updatedGrid, row, col, preyType) {
//     const directions = [
//       [-1, 0], [1, 0], [0, -1], [0, 1],
//     ];
    
//     for (const [dRow, dCol] of directions) {
//       const newRow = row + dRow;
//       const newCol = col + dCol;
  
//       // Check if the prey is in an adjacent cell
//       if (
//         newRow >= 0 && newRow < grid.length &&
//         newCol >= 0 && newCol < grid[0].length &&
//         grid[newRow][newCol] === preyType
//       ) {
//         updatedGrid[newRow][newCol] = "seaStar"; // Predator moves to prey's position
//         updatedGrid[row][col] = null;             // Previous position is now empty
//         return;
//       }
//     }
  
//     // Random movement if no prey nearby (optional)
//     const randomDirection = directions[Math.floor(Math.random() * directions.length)];
//     const randRow = row + randomDirection[0];
//     const randCol = col + randomDirection[1];
    
//     if (
//       randRow >= 0 && randRow < grid.length &&
//       randCol >= 0 && randCol < grid[0].length &&
//       !updatedGrid[randRow][randCol]
//     ) {
//       updatedGrid[randRow][randCol] = "seaStar";
//       updatedGrid[row][col] = null;
//     }
//   }
  
//   // Count species for population tracking
//   export function countSpecies(grid, speciesType) {
//     return grid.flat().filter((cell) => cell === speciesType).length;
//   }
  
// src/utils/simulationLogic.js

//NEW--------------------------------------------------------
// const SEA_URCHIN_GROWTH_RATE = 0.2;
// const SEA_STAR_HUNTING_RATE = 0.1;
// const SEA_URCHIN_CARRYING_CAPACITY = 30;
// const SEA_STAR_CARRYING_CAPACITY = 15;

// export function initializeGrid(rows, cols, speciesCounts) {
//   const grid = Array(rows)
//     .fill(null)
//     .map(() => Array(cols).fill(null));

//   for (let i = 0; i < speciesCounts.seaStar; i++) {
//     placeRandomly(grid, "seaStar");
//   }
//   for (let i = 0; i < speciesCounts.seaUrchin; i++) {
//     placeRandomly(grid, "seaUrchin");
//   }

//   return grid;
// }

// function placeRandomly(grid, speciesType) {
//   let placed = false;
//   while (!placed) {
//     const row = Math.floor(Math.random() * grid.length);
//     const col = Math.floor(Math.random() * grid[0].length);
//     if (!grid[row][col]) {
//       grid[row][col] = speciesType;
//       placed = true;
//     }
//   }
// }

// export function applyBehaviorRules(grid) {
//   const updatedGrid = grid.map((row) => row.slice());
//   let seaUrchinCount = countSpecies(grid, "seaUrchin");
//   let seaStarCount = countSpecies(grid, "seaStar");

//   if (seaUrchinCount < SEA_URCHIN_CARRYING_CAPACITY) {
//     seaUrchinCount += Math.min(
//       SEA_URCHIN_GROWTH_RATE * seaUrchinCount, 
//       SEA_URCHIN_CARRYING_CAPACITY - seaUrchinCount
//     );
//   }

//   seaStarCount = Math.min(
//     seaStarCount * (1 + SEA_STAR_HUNTING_RATE * (seaUrchinCount / SEA_URCHIN_CARRYING_CAPACITY)),
//     SEA_STAR_CARRYING_CAPACITY
//   );

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       const species = grid[row][col];
//       if (species === "seaStar") {
//         huntPrey(updatedGrid, row, col);
//       }
//     }
//   }

//   rePopulateGrid(updatedGrid, Math.round(seaUrchinCount), Math.round(seaStarCount));
//   return updatedGrid;
// }

// function huntPrey(updatedGrid, row, col) {
//   const directions = [
//     [-1, 0], [1, 0], [0, -1], [0, 1],
//   ];

//   for (const [dRow, dCol] of directions) {
//     const newRow = row + dRow;
//     const newCol = col + dCol;

//     if (
//       newRow >= 0 && newRow < updatedGrid.length &&
//       newCol >= 0 && newCol < updatedGrid[0].length &&
//       updatedGrid[newRow][newCol] === "seaUrchin"
//     ) {
//       updatedGrid[newRow][newCol] = "seaStar";
//       updatedGrid[row][col] = null;
//       return;
//     }
//   }
// }

// function rePopulateGrid(grid, seaUrchinCount, seaStarCount) {
//   clearGrid(grid);
//   for (let i = 0; i < seaUrchinCount; i++) {
//     placeRandomly(grid, "seaUrchin");
//   }
//   for (let i = 0; i < seaStarCount; i++) {
//     placeRandomly(grid, "seaStar");
//   }
// }

// function clearGrid(grid) {
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       grid[row][col] = null;
//     }
//   }
// }

// export function countSpecies(grid, speciesType) {
//   return grid.flat().filter((cell) => cell === speciesType).length;
// }

// src/utils/simulationLogic.js

// Constants for environmental stressors
const HURRICANE_PROBABILITY = 0.05; // 5% chance of hurricane in each update
const POLLUTION_IMPACT_RATE = 0.1;  // 10% reduction in growth during pollution
const TIDAL_CHANGE_PROBABILITY = 0.1; // 10% chance of tidal change in each update
const SEA_URCHIN_GROWTH_RATE = 0.2;
const SEA_STAR_HUNTING_RATE = 0.1;
const SEA_URCHIN_CARRYING_CAPACITY = 30;
const SEA_STAR_CARRYING_CAPACITY = 15;

export function initializeGrid(rows, cols, speciesCounts) {
  const grid = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(null));

  for (let i = 0; i < speciesCounts.seaStar; i++) {
    placeRandomly(grid, "seaStar");
  }
  for (let i = 0; i < speciesCounts.seaUrchin; i++) {
    placeRandomly(grid, "seaUrchin");
  }

  return grid;
}

function placeRandomly(grid, speciesType) {
  let placed = false;
  while (!placed) {
    const row = Math.floor(Math.random() * grid.length);
    const col = Math.floor(Math.random() * grid[0].length);
    if (!grid[row][col]) {
      grid[row][col] = speciesType;
      placed = true;
    }
  }
}

export function applyBehaviorRules(grid) {
  const updatedGrid = grid.map((row) => row.slice());
  let seaUrchinCount = countSpecies(grid, "seaUrchin");
  let seaStarCount = countSpecies(grid, "seaStar");

  // Apply environmental stressors
  if (Math.random() < HURRICANE_PROBABILITY) {
    applyHurricane(updatedGrid);
  }

  if (Math.random() < TIDAL_CHANGE_PROBABILITY) {
    applyTidalChange(updatedGrid);
  }

  // Population growth and interaction
  if (seaUrchinCount < SEA_URCHIN_CARRYING_CAPACITY) {
    seaUrchinCount += Math.min(
      SEA_URCHIN_GROWTH_RATE * seaUrchinCount * (1 - POLLUTION_IMPACT_RATE),
      SEA_URCHIN_CARRYING_CAPACITY - seaUrchinCount
    );
  }

  seaStarCount = Math.min(
    seaStarCount * (1 + SEA_STAR_HUNTING_RATE * (seaUrchinCount / SEA_URCHIN_CARRYING_CAPACITY)),
    SEA_STAR_CARRYING_CAPACITY
  );

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const species = grid[row][col];
      if (species === "seaStar") {
        huntPrey(updatedGrid, row, col);
      }
    }
  }

  rePopulateGrid(updatedGrid, Math.round(seaUrchinCount), Math.round(seaStarCount));
  return updatedGrid;
}

// Environmental Stressors

function applyHurricane(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const affectedArea = {
    startRow: Math.floor(Math.random() * rows * 0.5),
    endRow: Math.floor(Math.random() * rows * 0.5) + Math.floor(rows * 0.5),
    startCol: Math.floor(Math.random() * cols * 0.5),
    endCol: Math.floor(Math.random() * cols * 0.5) + Math.floor(cols * 0.5),
  };

  for (let row = affectedArea.startRow; row < affectedArea.endRow; row++) {
    for (let col = affectedArea.startCol; col < affectedArea.endCol; col++) {
      grid[row][col] = null; // Clear the area affected by the hurricane
    }
  }
}

function applyTidalChange(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const tidalZoneStart = Math.floor(rows * 0.25);
  const tidalZoneEnd = Math.floor(rows * 0.75);

  for (let row = tidalZoneStart; row < tidalZoneEnd; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "seaUrchin" && Math.random() < 0.5) {
        grid[row][col] = null; // Randomly remove some Sea Urchins in the tidal zone
      }
    }
  }
}

// Helper functions

function huntPrey(updatedGrid, row, col) {
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
  ];

  for (const [dRow, dCol] of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;

    if (
      newRow >= 0 && newRow < updatedGrid.length &&
      newCol >= 0 && newCol < updatedGrid[0].length &&
      updatedGrid[newRow][newCol] === "seaUrchin"
    ) {
      updatedGrid[newRow][newCol] = "seaStar";
      updatedGrid[row][col] = null;
      return;
    }
  }
}

function rePopulateGrid(grid, seaUrchinCount, seaStarCount) {
  clearGrid(grid);
  for (let i = 0; i < seaUrchinCount; i++) {
    placeRandomly(grid, "seaUrchin");
  }
  for (let i = 0; i < seaStarCount; i++) {
    placeRandomly(grid, "seaStar");
  }
}

function clearGrid(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      grid[row][col] = null;
    }
  }
}

export function countSpecies(grid, speciesType) {
  return grid.flat().filter((cell) => cell === speciesType).length;
}

  
  
