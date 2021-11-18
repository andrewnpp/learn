/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let morseSet = new Set();
    for (let word of words) {
        let str = '';
        for (let i = 0; i < word.length; i++) {
            str += morse[word.codePointAt(i) - 97];
        }
        morseSet.add(str);
    }
    return morseSet.size;
};
