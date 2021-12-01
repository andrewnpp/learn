/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    let min = null;
    let map = new Map();
    for (let i = 1; i < sortedArr.length; i++) {
        let abs = Math.abs(sortedArr[i] - sortedArr[i - 1]);
        if (min === null || abs < min) {
            min = abs;
        }
        if (map.has(abs)) {
            map.get(abs).push([sortedArr[i - 1], sortedArr[i]]);
        } else {
            map.set(abs, [[sortedArr[i - 1], sortedArr[i]]]);
        }
    }
    return map.get(min);
};
