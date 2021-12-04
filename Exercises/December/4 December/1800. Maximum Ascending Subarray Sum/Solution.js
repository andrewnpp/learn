/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let ascendingMax = 0;
    cycle: for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        let prev = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (prev < nums[j]) {
                sum += nums[j];
                prev = nums[j];
            } else {
                i = j - 1;
                break;
            }
        }
        if (sum > ascendingMax) {
            ascendingMax = sum;
        }
    }
    return ascendingMax;
};
