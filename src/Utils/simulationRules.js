// src/utils/simulationLogic.js

// Initialize the grid with given species counts
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
  
  // Apply behavior rules to create interactions
  export function applyBehaviorRules(grid) {
    const updatedGrid = grid.map((row) => row.slice());
  
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const species = grid[row][col];
  
        // Only apply movement rules for sea stars (predators)
        if (species === "seaStar") {
          moveTowardPrey(grid, updatedGrid, row, col, "seaUrchin");
        }
      }
    }
  
    return updatedGrid;
  }
  
  // Move predator towards the nearest prey if within range
  function moveTowardPrey(grid, updatedGrid, row, col, preyType) {
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
    ];
    
    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;
  
      // Check if the prey is in an adjacent cell
      if (
        newRow >= 0 && newRow < grid.length &&
        newCol >= 0 && newCol < grid[0].length &&
        grid[newRow][newCol] === preyType
      ) {
        updatedGrid[newRow][newCol] = "seaStar"; // Predator moves to prey's position
        updatedGrid[row][col] = null;             // Previous position is now empty
        return;
      }
    }
  
    // Random movement if no prey nearby (optional)
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    const randRow = row + randomDirection[0];
    const randCol = col + randomDirection[1];
    
    if (
      randRow >= 0 && randRow < grid.length &&
      randCol >= 0 && randCol < grid[0].length &&
      !updatedGrid[randRow][randCol]
    ) {
      updatedGrid[randRow][randCol] = "seaStar";
      updatedGrid[row][col] = null;
    }
  }
  
  // Count species for population tracking
  export function countSpecies(grid, speciesType) {
    return grid.flat().filter((cell) => cell === speciesType).length;
  }
  
  
  
  
