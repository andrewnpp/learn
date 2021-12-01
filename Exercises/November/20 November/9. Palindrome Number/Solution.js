/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let strReverse = [...str].reverse().join('');
    return str === strReverse;
};
