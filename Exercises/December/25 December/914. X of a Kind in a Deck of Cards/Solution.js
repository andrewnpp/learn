/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = new Map();
    for (let card of deck) {
        map.set(card, (map.get(card) || 0) + 1);
    }
    let arrSet = [...new Set(map.values())];
    return arrSet.reduce((prev, item) => {
        while (item) {
            let temp = prev % item;
            prev = item;
            item = temp;
        }
        return prev;
    }, arrSet[0]) >= 2;
};
