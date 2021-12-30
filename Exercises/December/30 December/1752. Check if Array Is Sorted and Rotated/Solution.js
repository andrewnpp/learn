/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let sorted = [...nums].sort((a, b) => a - b).join();
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);
    let pointer = maxIndex;
    while (pointer + 1 < nums.length && nums[pointer + 1] === max) {
        pointer++;
    }
    let part1 = nums.slice(0, pointer + 1);
    let part2 = nums.slice(pointer + 1);
    return [...part2, ...part1].join() === sorted;
};
