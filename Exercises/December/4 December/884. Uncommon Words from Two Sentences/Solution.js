/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let str = s1 + ' ' + s2;
    let map = new Map();
    for (let word of str.split(' ')) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    let uncommon = [];
    for (let [key, val] of map) {
        if (val === 1) {
            uncommon.push(key);
        }
    }
    return uncommon;
};
