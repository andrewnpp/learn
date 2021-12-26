/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], String.fromCharCode(97 + i));
    }
    let originalWords = words.map((word) => {
        return [...word].map((item) => map.get(item)).join('');
    });
    let sortedOriginalWords = [...originalWords].sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    for (let i = 0; i < originalWords.length; i++) {
        if (originalWords[i] !== sortedOriginalWords[i]) {
            return false;
        }
    }
    return true;
};
