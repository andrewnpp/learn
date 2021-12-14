/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let str = '';
    for (let word of words) {
        str += word;
        if (str.length > s.length) {
            return false;
        } else if (str === s) {
            return true;
        }
    }
    return false;
};
