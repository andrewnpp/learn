/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let set = new Set(nums);
    let positive = 1;
    while (set.has(positive)) {
        positive++;
    }
    return positive;
};
