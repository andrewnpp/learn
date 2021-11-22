/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    return [...n.toString(k)].reduce((prev, item) => +prev + +item, 0);
};
