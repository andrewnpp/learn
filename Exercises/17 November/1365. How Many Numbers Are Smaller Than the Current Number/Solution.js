/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let numsMap = new Map();
    for (let num of nums) {
        if (numsMap.has(num)) {
            numsMap.set(num, numsMap.get(num) + 1);
        } else {
            numsMap.set(num, 1);
        }
    }
    let sortedArr = [...numsMap.entries()].sort(([k1], [k2]) => k2 - k1);
    let sum = sortedArr.map(([, value]) => value).reduce((prev, item) => prev + item, 0);
    let smallerNumsCount = {};
    for (let [key, value] of sortedArr) {
        sum -= value;
        smallerNumsCount[key] = sum;
    }
    return nums.map((item) => smallerNumsCount[item]);
};
