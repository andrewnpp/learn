/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(Math.max(...arr.slice(i + 1)));
    }
    result.push(-1);
    return result;
};
