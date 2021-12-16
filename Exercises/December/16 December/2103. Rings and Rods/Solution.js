/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = new Set();
    }
    let count = 0;
    for (let i = 0; i < rings.length / 2; i++) {
        let color = rings[i * 2];
        let index = rings[i * 2 + 1];
        arr[index].add(color);
    }
    return arr.reduce((prev, item) => item.size === 3 ? prev + 1 : prev, 0);
};
