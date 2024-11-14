// src/utils/simulationLogic.js

export function initializeGrid(rows, cols, speciesCounts) {
    const grid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(null));
  
    // Populate the grid with initial species counts
    for (let i = 0; i < speciesCounts.seaStar; i++) {
      placeRandomly(grid, "seaStar");
    }
    for (let i = 0; i < speciesCounts.seaUrchin; i++) {
      placeRandomly(grid, "seaUrchin");
    }
  
    return grid;
  }
  
  function placeRandomly(grid, speciesType) {
    const row = Math.floor(Math.random() * grid.length);
    const col = Math.floor(Math.random() * grid[0].length);
    if (!grid[row][col]) {
      grid[row][col] = speciesType;
    }
  }
  
  export function applyBehaviorRules(grid) {
    const updatedGrid = grid.map(row => row.slice()); // Shallow copy of the grid
  
    // Apply rules here - you can add predator-prey logic, movement, etc.
    // For now, it just returns the copied grid as a placeholder.
  
    return updatedGrid;
  }
  
  export function countSpecies(grid, speciesType) {
    return grid.flat().filter(cell => cell === speciesType).length;
  }
  
  
