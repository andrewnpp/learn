/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let answer = '';
    for (let word of words) {
        let index = Math.trunc(word.length / 2);
        let first = word.slice(0, index);
        let second = word.length % 2 === 0 ? word.slice(index) : word.slice(index + 1);
        if (first === [...second].reverse().join('')) {
            answer = word;
            break;
        }
    }
    return answer;
};
