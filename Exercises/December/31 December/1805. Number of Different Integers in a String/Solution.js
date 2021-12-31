/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    return new Set((word.match(/\d+/g) || []).map((item) => item.replace(/^0+/, ''))).size;
};
