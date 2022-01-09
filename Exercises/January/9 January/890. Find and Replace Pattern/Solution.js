/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let answer = [];
    cycle: for (let word of words) {
        let map = new Map();
        let usedChars = new Set();
        for (let i = 0; i < word.length; i++) {
            if (!map.has(pattern[i])) {
                if (!usedChars.has(word[i])) {
                    map.set(pattern[i], word[i]);
                    usedChars.add(word[i]);
                } else {
                    continue cycle;
                }
            }
            if (map.get(pattern[i]) !== word[i]) {
                continue cycle;
            }
        }
        answer.push(word);
    }
    return answer;
};
