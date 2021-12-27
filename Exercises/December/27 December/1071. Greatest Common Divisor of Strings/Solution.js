/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let smaller = str1.length < str2.length ? str1 : str2;
    let str = smaller;
    while (str) {
        let split1 = str1.split(str).filter((item) => item.length);
        let split2 = str2.split(str).filter((item) => item.length);
        if (!split1.length && !split2.length) {
            return str;
        }
        str = str.slice(0, -1);
    }
    return '';
};
