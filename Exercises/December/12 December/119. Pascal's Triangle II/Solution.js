/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let rows = [];
    rows[0] = [1];
    rows[1] = [1, 1];
    for (let i = 2; i <= rowIndex; i++) {
        rows[i] = new Array(i + 1);
        rows[i][0] = rows[i][i] = 1;
        for (let j = 1; j < i; j++) {
            rows[i][j] = rows[i - 1][j - 1] + rows[i - 1][j];
        }
    }
    return rows[rowIndex];
};
