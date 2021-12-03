/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let map = new Map();
    let max = null;
    for (let i = 1; i <= n; i++) {
        let sum = [...i.toString()].reduce((prev, item) => prev + +item, 0);
        map.set(sum, (map.get(sum) || 0) + 1);
        if (max === null || map.get(sum) > max) {
            max = map.get(sum);
        }
    }
    return [...map.values()].filter((item) => item === max).length;
};
