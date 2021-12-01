/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let log2 = Math.log2(n);
    return parseInt(log2) === log2;
};
