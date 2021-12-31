/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    function checkMat(matrix) {
        let valid = true;
        cycle: for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] !== target[i][j]) {
                    valid = false;
                    break cycle;
                }
            }
        }
        return valid;
    }

    if (checkMat(mat)) {
        return true;
    }

    let rows = [];
    let cols = [];
    for (let row of mat) {
        rows.push(row);
    }
    for (let j = 0; j < mat[0].length; j++) {
        cols[j] = [];
        for (let i = 0; i < mat.length; i++) {
            cols[j].push(mat[i][j]);
        }
    }

    let firstRotate = [];
    for (let col of cols) {
        firstRotate.push([...col].reverse())
    }
    if (checkMat(firstRotate)) {
        return true;
    }

    let secondRotate = [];
    for (let i = rows.length - 1; i >= 0; i--) {
        secondRotate.push([...rows[i]].reverse())
    }
    if (checkMat(secondRotate)) {
        return true;
    }

    let thirdRotate = [];
    for (let i = cols.length - 1; i >= 0; i--) {
        thirdRotate.push(cols[i])
    }
    if (checkMat(thirdRotate)) {
        return true;
    }

    return false;
};
