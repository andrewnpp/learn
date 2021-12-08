/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let absArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            absArr.push(Math.abs(i - start));
        }
    }
    return Math.min(...absArr);
};
