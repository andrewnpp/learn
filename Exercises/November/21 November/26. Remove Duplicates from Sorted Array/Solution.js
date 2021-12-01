/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numsSet = [...new Set(nums)];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = numsSet[i];
    }
    return numsSet.length;
};
