/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let outside = nums.reduce((prev, item) => prev + item, 0);
    let arr = [...nums].sort((a, b) => a - b);
    let result = [];
    let inside = 0;
    while (arr.length) {
        let num = arr.pop();
        outside -= num;
        inside += num;
        result.push(num);
        if (inside > outside) {
            return result;
        }
    }
    return result;
};
