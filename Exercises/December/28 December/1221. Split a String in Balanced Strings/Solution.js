/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let rs = 0;
    let ls = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'R' ? rs++ : ls++;
        if (rs !== 0 && rs === ls) {
            count++;
            rs = ls = 0;
        }
    }
    return count;
};
