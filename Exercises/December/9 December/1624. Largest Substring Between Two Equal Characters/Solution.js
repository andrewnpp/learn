/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let set = new Set(s);
    let max = -1;
    for (let char of set) {
        let first = s.indexOf(char);
        let last = s.lastIndexOf(char);
        if (first !== last) {
            max = Math.max(max, last - first - 1);
        }
    }
    return max;
};
