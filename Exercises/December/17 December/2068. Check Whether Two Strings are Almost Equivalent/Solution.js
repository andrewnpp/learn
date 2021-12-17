/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let w1Map = new Map();
    for (let char of word1) {
        w1Map.set(char, (w1Map.get(char) || 0) + 1);
    }
    for (let char of word2) {
        w1Map.set(char, (w1Map.get(char) || 0) - 1);
    }
    for (let [ , val] of w1Map) {
        if (Math.abs(val) > 3) {
            return false;
        }
    }
    return true;
};
