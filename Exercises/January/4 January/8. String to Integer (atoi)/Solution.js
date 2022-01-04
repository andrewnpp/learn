/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let num = +s.trim().match(/^[-+]?\d+/)?.[0] || 0;
    if (num > 2 ** 31 - 1) return 2147483647;
    if (num < -(2 ** 31)) return -2147483648;
    return num;
};
