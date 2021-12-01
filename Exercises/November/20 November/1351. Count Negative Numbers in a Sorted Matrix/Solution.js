/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let result = 0;
    grid.forEach((row) => row.forEach((cell) => {
        if (cell < 0) result++;
    }));
    return result;
};
