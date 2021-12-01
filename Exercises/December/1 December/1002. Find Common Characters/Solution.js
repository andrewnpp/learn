/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let wordMaps = [...words.map((word) => {
        let wordMap = new Map();
        for (let letter of word) {
            wordMap.set(letter, (wordMap.get(letter) || 0) + 1);
        }
        return wordMap;
    })];
    let result = [];
    cycle: for (let [key, val] of wordMaps[0]) {
        let min = val;
        for (let i = 1; i < wordMaps.length; i++) {
            let letterCount = wordMaps[i].get(key);
            if (!letterCount) {
                continue cycle;
            } else {
                wordMaps[i].set(key, letterCount - 1);
                if (letterCount < min) {
                    min = letterCount;
                }
            }
        }
        result.push(...new Array(min).fill(key));
    }
    return result;
};
