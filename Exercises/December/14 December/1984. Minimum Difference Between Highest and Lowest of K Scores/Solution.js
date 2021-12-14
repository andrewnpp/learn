/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let min = null;
    let sorted = [...nums].sort((a, b) => a - b);
    for (let i = k - 1; i < sorted.length; i++) {
        let temp = sorted[i] - sorted[i - k + 1];
        if (min === null || temp < min) {
            min = temp;
        }
    }
    return min;
};
