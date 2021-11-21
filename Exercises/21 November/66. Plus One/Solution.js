/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let temp;
    if (digits[digits.length - 1] === 9) {
        temp = 1;
        digits[digits.length - 1] = 0;
    } else {
        temp = 0;
        digits[digits.length - 1]++;
    }
    for (let i = digits.length - 2; i >= 0; i--) {
        if (temp) {
            digits[i] += temp;
            if (digits[i] >= 10) {
                temp = digits[i] % 9;
                digits[i] = 0;
            } else {
                temp = 0;
            }
        } else {
            break;
        }
    }
    if (temp) {
        digits.unshift(temp);
    }
    return digits;
};
