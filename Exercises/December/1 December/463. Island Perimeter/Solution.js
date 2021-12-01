/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                let temp = 4;
                if (i - 1 >= 0 && grid[i - 1][j]) {
                    temp--;
                }
                if (j + 1 < grid[i].length && grid[i][j + 1]) {
                    temp--;
                }
                if (i + 1 < grid.length && grid[i + 1][j]) {
                    temp--;
                }
                if (j - 1 >= 0 && grid[i][j - 1]) {
                    temp--;
                }
                perimeter += temp;
            }
        }
    }
    return perimeter;
};
