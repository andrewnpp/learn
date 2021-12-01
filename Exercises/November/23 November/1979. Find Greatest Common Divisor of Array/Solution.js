/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let temp = min;
    while (temp !== 1) {
        if (max % temp === 0 && min % temp === 0) {
            return temp;
        }
        temp--;
    }
    return temp;
};
