/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let arr = [...nums].sort((a, b) => b - a);
    return (arr[0] - 1) * (arr[1] - 1);
};
