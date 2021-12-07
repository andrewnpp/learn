/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    if (!/[a-zA-Z]+/.test(s)) {
        return s;
    }
    let str = [...s.match(/[a-zA-Z]+/g).join('')].reverse().join('');
    let index = 0;
    return s.replace(/[a-zA-Z]+/g, (match) => {
        let substr = str.slice(index, index + match.length);
        index += match.length;
        return substr;
    });
};
