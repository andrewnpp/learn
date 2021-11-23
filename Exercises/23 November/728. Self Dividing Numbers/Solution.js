/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    start: for (let num = left; num <= right; num++) {
        let digits = [...num.toString()];
        if (digits.includes('0')) {
            continue;
        }
        for (let digit of digits) {
            if (num % +digit !== 0) {
                continue start;
            }
        }
        result.push(num);
    }
    return result;
};
