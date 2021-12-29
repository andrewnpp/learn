/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let words = text.match(/[a-z]+/g);
    let spaces = text.length - words.reduce((prev, item) => prev + item.length, 0);
    let equalSpaces = words.length === 1 ?  0 : Math.trunc(spaces / (words.length - 1));
    let equalSpacesStr = ' '.repeat(equalSpaces);
    let extraSpaces = words.length === 1 ?  spaces : spaces - equalSpaces * (words.length - 1);
    let answer = words.join(equalSpacesStr);
    if (extraSpaces) {
        answer += ' '.repeat(extraSpaces);
    }
    return answer;
};
