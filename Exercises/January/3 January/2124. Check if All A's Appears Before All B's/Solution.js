/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    return s === s.match(/^a*b*$/)?.[0];
};
