/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let boxMap = new Map();
    for (let i = lowLimit; i <= highLimit; i++) {
        let box = [...i.toString()].reduce((prev, item) => prev + +item, 0);
        boxMap.set(box, (boxMap.get(box) || 0) + 1);
    }
    return Math.max(...boxMap.values());
};
