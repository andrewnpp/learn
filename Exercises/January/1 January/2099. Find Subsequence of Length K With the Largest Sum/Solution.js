/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let sortedWithIndexes = nums.map((item, index) => [item, index]).sort(([val1], [val2]) => val2 - val1);
    let arr = sortedWithIndexes.slice(0, k).sort(([ , index1], [ , index2]) => index1 - index2).map(([val]) => val);
    return arr;
};
