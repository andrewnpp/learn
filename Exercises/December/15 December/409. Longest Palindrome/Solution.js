/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let oddExists = false;
    let count = 0;
    for (let [key, val] of map) {
        if (val % 2 === 0) {
            count += val;
        } else {
            oddExists = true;
            count += val - 1;
        }
    }
    count += +oddExists;
    return count;
};
