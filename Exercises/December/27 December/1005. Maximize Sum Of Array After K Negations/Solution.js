/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }
    let sum = nums.reduce((prev, item) => prev + item, 0);
    if (k % 2 === 1) {
        sum -=  Math.min(...nums) * 2;
    }
    return sum;
};
