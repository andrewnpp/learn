/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = new Map();
    let size = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === '_') {
            break;
        }
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if (map.get(nums[i]) > 2) {
            nums.splice(i, 1);
            i--;
        }
    }
};
