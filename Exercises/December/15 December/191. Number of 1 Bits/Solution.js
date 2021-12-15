/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return [...n.toString(2)].reduce((prev, item) => prev + +item, 0);
};
