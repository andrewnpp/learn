/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word === word.toUpperCase() || word === word[0] + word.slice(1).toLowerCase()) {
        return true;
    }
    return false;
};