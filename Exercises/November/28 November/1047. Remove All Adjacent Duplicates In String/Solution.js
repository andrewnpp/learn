/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let str = s;
    let regex = /(\w)\1/;
    while (str.match(regex)) {
        str = str.replace(regex, '');
    }
    return str;
};
