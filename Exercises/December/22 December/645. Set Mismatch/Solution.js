/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let missing = null;
    let number = null;
    for (let i = 1; i <= nums.length && (missing === null || number === null); i++) {
        let first = nums.indexOf(i);
        if (first === -1) {
            missing = i;
        } else {
            let last = nums.lastIndexOf(i);
            if (first !== last) {
                number = i;
            }
        }
    }
    return [number, missing];
};
