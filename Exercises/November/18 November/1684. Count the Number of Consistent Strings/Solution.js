/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    mark: for (let word of words) {
        let charArr = [...new Set(word)];
        for (let char of charArr) {
            if (!allowed.includes(char)) {
                continue mark;
            }
        }
        count++;
    }
    return count;
};
