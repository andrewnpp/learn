/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max = 1;
    let prev = s[0];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === prev) {
            count++;
        } else {
            if (count > max) {
                max = count;
            }
            prev = s[i];
            count = 1;
        }
    }
    if (count > max) {
        max = count;
    }
    return max;
};
