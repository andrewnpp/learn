/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max = 0;
    let result = 0;
    for (let i = n.length - 1; i >= 0; i--) {
        if (n[i] > max) {
            result += n[i] - max;
            max = +n[i];
        }
    }
    return result;
};
