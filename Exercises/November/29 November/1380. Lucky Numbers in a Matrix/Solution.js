/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let minInRow = [];
    for (let row of matrix) {
        minInRow.push(Math.min(...row));
    }
    let maxInColumn = [];
    for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
        let max = 0;
        for (let row of matrix) {
            max = Math.max(max, row[columnIndex]);
        }
        maxInColumn.push(max);
    }
    let luckyArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === minInRow[i] && matrix[i][j] === maxInColumn[j]) {
                luckyArr.push(matrix[i][j]);
            }
        }
    }
    return luckyArr;
};
