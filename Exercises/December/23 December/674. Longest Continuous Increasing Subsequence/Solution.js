/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let sub = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            count++;
        } else {
            sub = Math.max(sub, count);
            count = 1;
        }
    }
    sub = Math.max(sub, count);
    return sub;
};
