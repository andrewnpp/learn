/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    return [...new Set(s.match(/\d/g) || [])].sort((a, b) => b - a)[1] || -1;;
};
