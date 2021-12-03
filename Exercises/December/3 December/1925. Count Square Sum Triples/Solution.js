/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count = 0;
    cycle: for (let a = 1; a < n; a++) {
        for (let b = 1; b < n; b++) {
            let sum = a ** 2 + b ** 2;
            let c = Math.sqrt(sum);
            if (sum <= n ** 2 && parseInt(c) === c) {
                count++;
            } else if (sum > n ** 2) {
                continue cycle;
            }
        }
    }
    return count;
};
