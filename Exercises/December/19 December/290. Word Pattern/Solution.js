/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if (words.length !== pattern.length) {
        return false;
    }
    let map = new Map();
    let set = new Set();
    for (let i = 0; i < pattern.length; i++) {
        let letter = pattern[i];
        if (!map.has(letter)) {
            if (set.has(words[i])) {
                return false;
            }
            map.set(letter, words[i]);
            set.add(words[i]);
        } else if (map.get(letter) !== words[i]) {
            return false;
        }
    }
    return true;
};
