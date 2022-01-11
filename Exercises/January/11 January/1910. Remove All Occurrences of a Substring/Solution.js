/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while (new RegExp(`(${part})+`).test(s)) {
        s = s.replace(new RegExp(`(${part})+`), '');
    }
    return s;
};
