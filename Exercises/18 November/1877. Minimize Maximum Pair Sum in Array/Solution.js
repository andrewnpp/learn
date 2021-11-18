/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let max = 0;
    let arr = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < arr.length / 2; i++) {
        let sum = arr[i] + arr[arr.length - 1 - i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};
