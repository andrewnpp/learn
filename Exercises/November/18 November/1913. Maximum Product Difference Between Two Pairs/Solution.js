/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let arr = [...nums].sort((a, b) => b - a);
    return arr[0] * arr[1] - arr[arr.length - 1] * arr[arr.length - 2];
};
