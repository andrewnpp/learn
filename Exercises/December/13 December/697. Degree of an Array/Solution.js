/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let max = Math.max(...map.values());
    let numsMaxFreq = [...map].filter(([ , val]) => val === max).map(([key]) => key);
    let smallestLength = null;
    for (let num of numsMaxFreq) {
        let temp = nums.lastIndexOf(num) - nums.indexOf(num) + 1;
        if (smallestLength === null || temp < smallestLength) {
            smallestLength = temp;
        }
    }
    return smallestLength;
};
