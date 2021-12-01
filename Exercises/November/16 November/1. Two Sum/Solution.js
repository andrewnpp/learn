/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let mapIndex = numsMap.get(target - nums[i]);
        if (mapIndex !== undefined) {
            return [mapIndex, i];
        } else if (numsMap.get(nums[i]) === undefined){
            numsMap.set(nums[i], i);
        }
    }
};
