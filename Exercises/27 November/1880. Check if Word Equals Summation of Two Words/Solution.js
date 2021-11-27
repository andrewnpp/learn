/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let first = +([...firstWord].map((item) => item.charCodeAt(0) - 97).join(''));
    let second = +([...secondWord].map((item) => item.charCodeAt(0) - 97).join(''));
    let target = +([...targetWord].map((item) => item.charCodeAt(0) - 97).join(''));
    return first + second === target;
};
