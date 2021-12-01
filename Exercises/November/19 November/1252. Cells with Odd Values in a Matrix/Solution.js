/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let matrix = new Array(m);
    for (let i = 0; i < m; i++) {
        matrix[i] = new Array(n).fill(0);
    }
    for (let [r, c] of indices) {
        matrix[r].forEach((item, index, arr) => arr[index]++);
        matrix.forEach((item, index, arr) => arr[index][c]++);
    }
    let count = 0;
    matrix.forEach((row) => {
        row.forEach((cell) => {
            if (cell % 2 === 1) {
                count++;
            }
        });
    });
    return count;
};
