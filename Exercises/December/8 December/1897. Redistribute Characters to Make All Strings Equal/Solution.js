/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let map = new Map();
    for (let word of words) {
        for (let char of word) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }
    for (let [ , val] of map) {
        if (val % words.length !== 0) {
            return false;
        }
    }
    return true;
};
