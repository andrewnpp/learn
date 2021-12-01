/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let textChars = {};
    for (let char of text) {
        textChars[char] = (textChars[char] || 0) + 1;
    }

    let word = 'balloon';
    let wordChars = {};
    for (let char of word) {
        wordChars[char] = (wordChars[char] || 0) + 1;
    }

    let maxWords;
    for (let char in wordChars) {
        if (!(char in textChars)) {
            return 0;
        }
        let count = Math.trunc(textChars[char] / wordChars[char]);
        if (count === 0) {
            return 0;
        }
        if (maxWords === undefined || maxWords > count) {
            maxWords = count;
        }
    }

    return maxWords;
};
