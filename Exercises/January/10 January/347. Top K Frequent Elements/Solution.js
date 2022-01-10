/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map].sort(([ , val1], [ , val2]) => val2 - val1).map(([key]) => key).slice(0, k);
};
