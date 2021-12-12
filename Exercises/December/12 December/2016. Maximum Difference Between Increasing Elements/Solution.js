/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let result = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        let lesser = nums[i];
        let bigger = Math.max(...nums.slice(i + 1));
        if (lesser < bigger && bigger - lesser > result) {
            result = bigger - lesser;
        }
    }
    return result;
};
