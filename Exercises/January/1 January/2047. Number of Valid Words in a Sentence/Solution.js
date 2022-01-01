/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    let tokens = sentence.trim().split(/ +/);
    tokens = tokens.filter((item) => !/\d/.test(item));
    tokens = tokens.filter((item) => {
        let matches = item.match(/-/g) || [];
        if (matches.length > 1) {
            return false;
        } else if (matches.length === 1) {
            return /(?<=[a-z])-(?=[a-z])/.test(item);
        }
        return true;
    });
    tokens = tokens.filter((item) => {
        let matches = item.match(/[!.,]/g) || [];
        if (matches.length > 1) {
            return false;
        } else if (matches.length === 1) {
            return /[!.,]$/.test(item);
        }
        return true;
    });
    return tokens.length;
};
