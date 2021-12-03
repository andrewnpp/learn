/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let count = 0;
    for (let subLength = 0; subLength < word.length; subLength++) {
        cycle: for (let i = 0; i < word.length - subLength; i++) {
            let str = word.slice(i, i + subLength + 1);
            let map = new Map([
                ['a', 0],
                ['e', 0],
                ['i', 0],
                ['o', 0],
                ['u', 0],
            ]);
            for (let char of str) {
                if (!map.has(char)) {
                    continue cycle;
                } else {
                    map.set(char, map.get(char) + 1);
                }
            }
            if (![...map.values()].includes(0)) {
                count++;
            }
        }
    }
    return count;
};
