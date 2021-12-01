/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt([...num.toString(2)].map((digit) => +(!+digit)).join(''), 2);
};
