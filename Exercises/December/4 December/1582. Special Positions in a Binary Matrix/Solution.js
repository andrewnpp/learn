/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let rows = [];
    for (let row of mat) {
        rows.push(row.filter((item) => item === 1).length);
    }
    let cols = [];
    for (let index = 0; index < mat[0].length; index++) {
        cols[index] = 0;
        for (let row of mat) {
            if (row[index] === 1) {
                cols[index]++;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1 ) {
                count++;
            }
        }
    }
    return count;
};
