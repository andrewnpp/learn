/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let stonesMap = new Map();
    for (let stone of stones) {
        if (stonesMap.has(stone)) {
            stonesMap.set(stone, stonesMap.get(stone) + 1);
        } else {
            stonesMap.set(stone, 1);
        }
    }
    let result = 0;
    for (let jewel of jewels) {
        if (stonesMap.has(jewel)) {
            result += stonesMap.get(jewel);
        }
    }
    return result;
};
