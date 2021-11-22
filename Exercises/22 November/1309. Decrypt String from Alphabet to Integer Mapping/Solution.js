/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    function returnChar(numStr) {
        let num = +numStr.slice(0, 2);
        return String.fromCharCode(96 + num);
    }
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (i + 2 < s.length && s[i + 2] === '#') {
            result += returnChar(s.slice(i, i + 3));
            i = i + 2;
        } else {
            result += returnChar(s[i]);
        }
    }
    return result;
};
