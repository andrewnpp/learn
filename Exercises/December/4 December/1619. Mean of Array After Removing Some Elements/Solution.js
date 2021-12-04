/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let cutLength = arr.length * 0.05;
    arr = arr.sort((a, b) => a - b).slice(cutLength, -cutLength);
    return arr.reduce((prev, item) => prev + item, 0) / arr.length;
};
