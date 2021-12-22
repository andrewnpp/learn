/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let tail = nums[0], head = nums[k - 1];
    let sum = nums.slice(0, k).reduce((prev, item) => prev + item, 0);
    let max = sum / k;
    for (let i = 1; i <= nums.length - k; i++) {
        sum -= tail;
        tail = nums[i];
        sum += nums[i + k - 1];
        head = nums[i + k - 1];
        let avg = sum / k;
        if (avg > max) {
            max = avg;
        }
    }
    return max;
};
