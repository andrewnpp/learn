/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let regex = new RegExp('^' + searchWord);
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (regex.test(words[i])) {
            return i + 1;
        }
    }
    return -1;
};
