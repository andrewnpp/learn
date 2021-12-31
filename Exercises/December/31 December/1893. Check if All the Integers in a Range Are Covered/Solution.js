/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    let arr = [];
    for (let [start, end] of ranges) {
        for (let i = start; i <= end; i++) {
            arr[i] = 1;
        }
    }
    for (let i = left; i <= right; i++) {
        if (!arr[i]) {
            return false;
        }
    }
    return true;
};
