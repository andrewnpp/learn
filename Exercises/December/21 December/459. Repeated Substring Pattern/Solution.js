/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let str = s[0];
    let size = 1;
    let middle = Math.trunc(s.length / 2);
    while (size <= middle) {
        if (s.length % size === 0 && str.repeat(s.length / size) === s) {
            return true;
        }
        str += s[size++];
    }
    return false;
};
