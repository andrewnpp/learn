/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numsMap = new Map();
    for (let num of nums) {
        if (numsMap.has(num)) {
            numsMap.set(num, numsMap.get(num) + 1)
        } else {
            numsMap.set(num, 1);
        }
    }
    let half = nums.length / 2;
    for (let [key, val] of numsMap) {
        if (val > half) {
            return key;
        }
    }
};
