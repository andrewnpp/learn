/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeroIndex = arr.indexOf(0);
    while (zeroIndex !== -1 && zeroIndex < arr.length - 1) {
        arr.splice(zeroIndex, 0, 0);
        arr.pop();
        zeroIndex = arr.indexOf(0, zeroIndex + 2);
    }
};
