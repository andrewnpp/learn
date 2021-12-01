/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            arr.unshift(num);
        } else {
            arr.push(num);
        }
    }
    return arr;
};
