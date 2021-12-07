/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    if (!nums.includes(1)) {
        return true;
    }
    let prev = nums.indexOf(1);
    let current = nums.indexOf(1, prev + 1);
    while (current !== - 1) {
        if (current - prev - 1 < k) {
            return false;
        }
        prev = current;
        current = nums.indexOf(1, prev + 1);
    }
    return true;
};
