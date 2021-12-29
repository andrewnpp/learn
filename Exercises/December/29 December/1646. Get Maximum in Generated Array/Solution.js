/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n === 0) {
        return 0;
    }
    let arr = [0, 1];
    for (let i = 1; i <= Math.trunc(n / 2); i++) {
        arr[2 * i] = arr[i];
        if (2 * i + 1 <= n) {
            arr[2 * i + 1] = arr[i] + arr[i + 1];
        }
    }
    return Math.max(...arr);
};
