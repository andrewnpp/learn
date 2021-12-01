/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charsMap = new Map();
    for (let char of chars) {
        charsMap.set(char, (charsMap.get(char) || 0) + 1);
    }
    let wordMaps = words.map((word) => {
        let wordMap = new Map();
        for (let letter of word) {
            wordMap.set(letter, (wordMap.get(letter) || 0) + 1);
        }
        return wordMap;
    });
    let result = 0;
    cycle: for (let i = 0; i < wordMaps.length; i++) {
        for (let [key, val] of wordMaps[i]) {
            let charCount = charsMap.get(key);
            if (!charCount || val > charCount) {
                continue cycle;
            }
        }
        result += words[i].length;
    }
    return result;
};
