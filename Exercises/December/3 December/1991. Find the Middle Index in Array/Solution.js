/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let left = 0;
    let right = nums.reduce((prev, item) => prev + item, 0);
    for (let i = 0; i < nums.length; i++) {
        if (i - 1 >= 0) {
            left += nums[i - 1];
        }
        right -= nums[i];
        if (left === right) {
            return i;
        }
    }
    return -1;
};
