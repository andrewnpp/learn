/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) {
        return true;
    }
    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            map.set(t[i], []);
        }
        map.get(t[i]).push(i);
    }
    let prev = null;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!map.has(s[i])) {
            return false;
        }
        let current = map.get(s[i]).pop();
        if (prev === null || current < prev) {
            prev = current;
        } else {
            return false;
        }
    }
    return true;
};
