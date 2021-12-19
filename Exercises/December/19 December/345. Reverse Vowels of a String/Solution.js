/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = s.match(/[aAeEiIoOuU]/g);
    return s.replace(/[aAeEiIoOuU]/g, () => vowels.pop());
};
