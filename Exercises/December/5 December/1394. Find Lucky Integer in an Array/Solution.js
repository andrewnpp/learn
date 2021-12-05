/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    arr.sort((a, b) => b - a);
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let [key, val] of map) {
        if (key === val) {
            return key;
        }
    }
    return -1;
};
