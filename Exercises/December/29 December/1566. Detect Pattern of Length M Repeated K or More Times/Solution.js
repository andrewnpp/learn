/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    let str = arr.join();
    let set = new Set();
    cycle: for (let i = 0; i <= arr.length - m; i++) {
        let mStr = arr.slice(i, i + m).join();
        if (set.has(mStr)) {
            continue cycle;
        }
        set.add(mStr);
        mStr = new Array(k).fill(mStr).join();
        let regexp = new RegExp(`(?<=(^|,))${mStr}(?=(,|$))`);
        if (regexp.test(str)) {
            return true;
        }
    }
    return false;
};
