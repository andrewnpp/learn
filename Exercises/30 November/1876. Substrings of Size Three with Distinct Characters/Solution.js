/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if (s.length < 3) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
            count++;
        }
    }
    return count;
};
