/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let count = 0;
    let cursor = 1;
    for (let i = 0; i < arr.length; i++) {
        while (cursor !== arr[i]) {
            count++;
            if (count === k) {
                return cursor;
            }
            cursor++;
        }
        cursor++;
    }
    return arr[arr.length - 1] + k - count;
};
