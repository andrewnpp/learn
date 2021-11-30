/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let map = new Map();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let key = Math.abs(i - rCenter) + Math.abs(j - cCenter);
            if (map.has(key)) {
                map.get(key).push([i, j]);
            } else {
                map.set(key, [[i, j]]);
            }
        }
    }
    let arr = [...map.entries()].sort(([k1], [k2]) => k1 - k2);
    let result = [];
    for (let [, val] of arr) {
        result.push(...val);
    }
    return result;
};
