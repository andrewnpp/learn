/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let result = 0;
    let pointer = 'a';
    for (let char of word) {
        let min = Math.min(pointer.charCodeAt(0), char.charCodeAt(0));
        let max = Math.max(pointer.charCodeAt(0), char.charCodeAt(0));
        result += Math.min(max - min, 122 - max + min - 96) + 1;
        pointer = char;
    }
    return result;
};
