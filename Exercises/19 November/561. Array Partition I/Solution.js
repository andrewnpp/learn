/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let arr = [...nums].sort((a, b) => a - b).filter((item, index) => index % 2 === 0);
    return arr.reduce((prev, item) => prev + item, 0);
};
