/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    let indices = [];
    let index = nums.indexOf(target);
    while (index !== -1) {
        indices.push(index);
        index = nums.indexOf(target, index + 1);
    }
    return indices;
};
