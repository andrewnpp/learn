/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let arr = [...nums].sort((a, b) => b - a);
    return Math.max(arr[0] * arr[1] * arr[2], arr.pop() * arr.pop() * arr[0]);
};
