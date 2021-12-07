/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        triangle[i] = new Array(i + 1);
        triangle[i][0] = 1;
        triangle[i][i] = 1;
    }
    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < triangle[i].length - 1; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    return triangle;
};
