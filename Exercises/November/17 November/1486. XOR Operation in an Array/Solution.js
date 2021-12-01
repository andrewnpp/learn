/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(start + i * 2);
    }
    return arr.reduce((prev, item) => prev ^ item);
};
