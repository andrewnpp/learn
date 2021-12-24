/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let primes = new Set();
    let ignore = new Set([1]);
    let count = 0;
    cycle: for (let i = left; i <= right; i++) {
        let bits = [...i.toString(2)].reduce((prev, item) => prev + +item, 0);
        if (ignore.has(bits)) {
            continue;
        }
        if (!primes.has(bits)) {
            for (let j = 2, sqrt = Math.sqrt(bits); j <= sqrt; j++) {
                if (bits % j === 0) {
                    ignore.add(bits);
                    continue cycle;
                }
            }
            primes.add(bits);
        }
        count++;
    }
    return count;
};
