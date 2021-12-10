/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increase = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            increase = false;
            break;
        }
    }
    if (increase) {
        return true;
    }
    let decrease = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            decrease = false;
            break;
        }
    }
    return decrease;
};
