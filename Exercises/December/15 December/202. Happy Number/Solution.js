/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        }
        set.add(n);
        n = [...n.toString()].reduce((prev, item) => prev + item ** 2, 0);
    }
    return true;
};
