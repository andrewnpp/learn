/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if (nums.includes(0)) {
        return 0;
    }
    let sign = 1;
    for (let num of nums) {
        if (num < 0) {
            sign *= -1;
        }
    }
    return sign;
};
