/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let setRows = new Set();
    let setCols = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                setRows.add(i);
                setCols.add(j);
            }
        }
    }
    for (let i of setRows) {
        matrix[i] = new Array(matrix[0].length).fill(0);
    }
    for (let j of setCols) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][j] = 0;
        }
    }
};
