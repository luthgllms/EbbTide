export const initializeGrid = (rows, cols, speciesCounts) => {
    const grid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(null));
  
    // Populate the grid based on initial species counts
    // Example logic: Place sea stars and sea urchins randomly
    for (let i = 0; i < speciesCounts.seaStar; i++) {
      placeRandomly(grid, "seaStar");
    }
    for (let i = 0; i < speciesCounts.seaUrchin; i++) {
      placeRandomly(grid, "seaUrchin");
    }
  
    return grid;
  };
  
  function placeRandomly(grid, speciesType) {
    const row = Math.floor(Math.random() * grid.length);
    const col = Math.floor(Math.random() * grid[0].length);
    if (!grid[row][col]) {
      grid[row][col] = speciesType;
    }
  }
  
  export function applyBehaviorRules(grid) {
    // Apply predator-prey interactions, population dynamics
  }
  
