/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let max = Math.trunc(sequence.length / word.length);
    let wordSeq = word;
    let result = 0;
    for (let i = 1; i <= max; i++) {
        if (sequence.includes(wordSeq)) {
            result = i;
            wordSeq += word;
        } else {
            break;
        }
    }
    return result;
};
