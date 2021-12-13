/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (!nums.includes(1)) {
        return 0;
    }
    return Math.max(...nums.join('').match(/1+/g).map((item) => item.length));
};
