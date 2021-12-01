/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let numsMap = new Map();
    for (let num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }
    nums.sort((a, b) => {
        if (numsMap.get(a) < numsMap.get(b)) {
            return -1;
        } else if (numsMap.get(a) > numsMap.get(b)) {
            return 1;
        } else {
            return b - a;
        }
    });
    return nums;
};
