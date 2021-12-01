/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let numsMap = new Map();
    for (let num of nums) {
        if (numsMap.has(num)) {
            numsMap.set(num, numsMap.get(num) + 1);
        } else {
            numsMap.set(num, 1);
        }
    }
    return [...numsMap].filter(([key, value]) => value === 1).reduce((prev, [key, value]) => prev + key, 0);
};
