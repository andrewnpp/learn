/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function convertStr(str) {
        let matches = str.match(/#+/g) || [];
        for (let match of matches) {
            str = str.replace(new RegExp(`[a-z]{0,${match.length}}#{${match.length}}`), '');
        }
        return str;
    }
    return convertStr(s) === convertStr(t);
};
