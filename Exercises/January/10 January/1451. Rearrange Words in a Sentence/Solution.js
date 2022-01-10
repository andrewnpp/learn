/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let words = text.split(' ');
    words[0] = words[0].toLowerCase();
    let map = new Map();
    for (let word of words) {
        if (!map.has(word.length)) {
            map.set(word.length, []);
        }
        map.get(word.length).push(word);
    }
    let lowStr = [...map].sort(([key1], [key2]) => key1 - key2).map(([ , val]) => val.join(' ')).join(' ');
    return lowStr[0].toUpperCase() + lowStr.slice(1);
};
