/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let numsSet = new Set();
    for (let num of nums) {
        if (!numsSet.has(num)) {
            numsSet.add(num);
        } else {
            return num;
        }
    }
};
