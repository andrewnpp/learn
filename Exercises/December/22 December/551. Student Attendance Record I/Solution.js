/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let prev = s[0];
    let absent = s[0] === 'A' ? 1 : 0;
    let late = s[0] === 'L' ? 1 : 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === 'L') {
            prev === 'L' ? late++ : late = 1;
            if (late >= 3) {
                return false;
            }
        }
        if (s[i] === 'A' && ++absent >= 2) {
            return false;
        }
        prev = s[i];
    }
    return true;
};
