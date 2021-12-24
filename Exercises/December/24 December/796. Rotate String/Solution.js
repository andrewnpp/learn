/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) {
        return true;
    }
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        if (s === goal) {
            return true;
        }
    }
    return false;
};
