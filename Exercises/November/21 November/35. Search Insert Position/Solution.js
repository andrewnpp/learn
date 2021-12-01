/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let indexOf = nums.indexOf(target);
    if (indexOf !== -1) {
        return indexOf;
    }
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return nums.length;
};
