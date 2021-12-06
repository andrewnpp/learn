/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let nums = [0, 1, 1];
    if (n <= 1) {
        return n;
    }
    for (let i = 3; i <= n; i++) {
        nums.push(nums[0] + nums[1] + nums[2]);
        nums.shift();
    }
    return nums[2];
};
