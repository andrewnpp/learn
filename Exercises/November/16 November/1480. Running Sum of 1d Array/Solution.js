/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let arr = [];
    nums.forEach((item) => {
        sum += item;
        arr.push(sum);
    });
    return arr;
};
