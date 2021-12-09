/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            nums.push(nums.splice(i, 1));
            i--;
        }
    }
};
