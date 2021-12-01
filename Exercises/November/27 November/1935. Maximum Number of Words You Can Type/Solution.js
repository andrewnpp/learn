/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(' ');
    let count = 0;
    cycle: for (let word of words) {
        for (let letter of brokenLetters) {
            if (word.includes(letter)) {
                continue cycle;
            }
        }
        count++;
    }
    return count;
};
