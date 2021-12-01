/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let charsMap = new Map();
    for (let char of s) {
        if (charsMap.has(char)) {
            charsMap.set(char, charsMap.get(char) + 1);
        } else {
            charsMap.set(char, 1);
        }
    }
    let counts = [...charsMap.values()];
    for (let i = 0; i < counts.length - 1; i++) {
        if (counts[i] !== counts[i + 1]) {
            return false;
        }
    }
    return true;
};
