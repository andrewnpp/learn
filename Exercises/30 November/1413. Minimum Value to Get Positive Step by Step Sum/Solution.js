/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1;
    let count = startValue;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        if (count < 1) {
            startValue += 1 - count;
            count += 1 - count;
        }
    }
    return startValue;
};
