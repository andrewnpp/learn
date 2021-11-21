/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if (!word.includes(ch)) {
        return word;
    }
    let strArr = [...word];
    return [...strArr.splice(0, word.indexOf(ch) + 1).reverse(), ...strArr].join('');
};
