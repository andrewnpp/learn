/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let str = licensePlate;
    str = str.replace(/[\d ]+/g, '');
    str = str.toLowerCase();
    let strMap = new Map();
    for (let char of str) {
        strMap.set(char,  (strMap.get(char) || 0) + 1);
    }
    let wordMaps = [];
    for (let word of words) {
        let wordMap = new Map();
        for (let char of word) {
            wordMap.set(char,  (wordMap.get(char) || 0) + 1);
        }
        wordMaps.push(wordMap);
    }
    let shortest = null;
    cycle: for (let i = 0; i < wordMaps.length; i++) {
        for (let [key, val] of strMap) {
            if (!wordMaps[i].has(key) || wordMaps[i].get(key) < val) {
                continue cycle;
            }
        }
        if (shortest === null || words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
};
