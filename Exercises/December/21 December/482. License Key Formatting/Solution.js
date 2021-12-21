/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let str = s.toUpperCase().replace(/\-/g, '');
    let sizeFirst = str.length % k;
    let result = str.slice(0, sizeFirst);
    let strKs = str.slice(sizeFirst);
    if (result && strKs) {
        result += '-';
    }
    let regex = new RegExp(`\\w{${k}}`, 'g');
    let arr = strKs.match(regex) || [];
    result += arr.join('-');
    return result;
};
