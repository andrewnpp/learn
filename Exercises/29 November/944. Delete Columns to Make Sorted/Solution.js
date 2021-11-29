/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    cycle: for (let columnIndex = 0; columnIndex < strs[0].length; columnIndex++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i - 1][columnIndex] > strs[i][columnIndex]) {
                count++;
                continue cycle;
            }
        }
    }
    return count;
};
