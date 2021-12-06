/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = [];
    for (let row of grid) {
        arr.push(...row);
    }
    arr = [...arr.splice(-k % arr.length), ...arr];
    let result = [];
    let rowL = grid[0].length;
    for (let i = 0; i < grid.length; i++) {
        result.push(arr.slice(i * rowL, (i + 1) * rowL));
    }
    return result;
};
