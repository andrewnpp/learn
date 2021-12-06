/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) {
        return mat;
    }
    let arr = [];
    for (let row of mat) {
        arr.push(...row);
    }
    let reshaped = [];
    for (let i = 0; i < r; i++) {
        reshaped[i] = arr.slice(i * c, (i + 1) * c);
    }
    return reshaped;
};
