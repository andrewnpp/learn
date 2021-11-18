/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(' ');
    let result = new Array(words.length);
    for (let word of words) {
        result[word[word.length - 1] - 1] = word.slice(0, -1);
    }
    return result.join(' ');
};
