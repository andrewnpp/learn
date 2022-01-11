/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let answer = '';
    let arr = [...map].sort(([ , val1], [ , val2]) => val2 - val1).forEach(([key, val]) => answer += key.repeat(val));
    return answer;
};
