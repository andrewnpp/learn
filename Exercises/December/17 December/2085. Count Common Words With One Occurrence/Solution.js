/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count = 0;
    let set = new Set();
    for (let word of words1) {
        if (set.has(word)) {
            continue;
        }
        set.add(word);
        let w1First = words1.indexOf(word);
        let w1Last = words1.lastIndexOf(word);
        let w2First = words2.indexOf(word);
        let w2Last = words2.lastIndexOf(word);
        if (w2First !== -1 && w1First === w1Last && w2First === w2Last) {
            count++;
        }
    }
    return count;
};
