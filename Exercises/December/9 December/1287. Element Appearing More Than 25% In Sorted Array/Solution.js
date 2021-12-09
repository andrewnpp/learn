/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let quarter = arr.length / 4;
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > quarter) {
            return num;
        }
    }
};
