/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let filteredNums = nums.filter((item) => item != val);
    for (let i = 0; i< nums.length; i++) {
        nums[i] = filteredNums[i];
    }
    return filteredNums.length;
};
