/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;
    for (let log of logs) {
        if (log === '../' && depth - 1 >= 0) {
            depth--;
        } else if (/\w+\//.test(log)) {
            depth++;
        }
    }
    return depth;
};
