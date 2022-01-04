/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x < 0 ? '-' : '';;
    str += [...Math.abs(x).toString()].reverse().join('');
    let num = +str;
    if (num < -(2 ** 31) || num > 2 ** 31 - 1) {
        return 0;
    }
    return num;
};
