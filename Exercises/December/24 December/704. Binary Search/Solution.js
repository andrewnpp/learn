/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let answer;
    function goThrough(from, to) {
        if (from > to || from === to && nums[from] !== target) {
            answer = -1;
        } else {
            let center = from + Math.trunc((to - from) / 2);
            if (nums[center] === target) {
                answer = center;
            } else if (target < nums[center]) {
                goThrough(from, center - 1);
            } else {
                goThrough(center + 1, to);
            }
        }
    }
    goThrough(0, nums.length - 1);
    return answer;
};
