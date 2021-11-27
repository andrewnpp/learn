/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let repeatingStrs = new Set();
    let distinctStrs = [];
    for (let i = 0; i < arr.length; i++) {
        if (!repeatingStrs.has(arr[i])) {
            if (i !== arr.lastIndexOf(arr[i])) {
                repeatingStrs.add(arr[i]);
            } else {
                distinctStrs.push(arr[i]);
            }
        }
    }
    return distinctStrs[k - 1] || '';
};
