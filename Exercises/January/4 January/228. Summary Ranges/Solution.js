/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    let start = null;
    let end = null;
    for (let i = 0 ; i < nums.length; i++) {
        if (start === null) {
            start = end = nums[i];
        } else {
            if (nums[i] - end === 1) {
                end = nums[i];
            } else {
                start === end ? result.push(`${start}`) : result.push(`${start}->${end}`);
                start = nums[i];
                end = nums[i];
            }
        }
        if (i === nums.length - 1) {
            start === end ? result.push(`${start}`) : result.push(`${start}->${end}`);
        }
    }
    return result;
};
