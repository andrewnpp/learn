/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let first = 0;
    let second = 0;
    for (let i = 0, j = mat.length - 1; i < mat.length, j >= 0; i++, j--) {
        first += mat[i][i];
        second += mat[i][j];
    }
    let result = first + second;
    if (mat.length % 2 === 1) {
        result -= mat[Math.trunc(mat.length / 2)][Math.trunc(mat.length / 2)]
    }
    return result;
};
