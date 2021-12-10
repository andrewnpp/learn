/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => a - b);
    return arr.map((item) => sorted.indexOf(item) + 1);
};
