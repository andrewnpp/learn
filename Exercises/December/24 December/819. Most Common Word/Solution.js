/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.match(/[a-zA-Z]+/g).map((item) => item.toLowerCase()).filter((item) => !banned.includes(item));
    let map = new Map();
    let max = 0;
    let answer;
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    for (let [key, val] of map) {
        if (val > max) {
            max = val;
            answer = key;
        }
    }
    return answer;
};
