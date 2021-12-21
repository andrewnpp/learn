/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gSorted = [...g].sort((a, b) => a - b);
    let sSorted = [...s].sort((a, b) => a - b);
    let count = 0;
    while (gSorted.length && sSorted.length) {
        let greed = gSorted.pop();
        if (greed <= sSorted[sSorted.length - 1]) {
            count++;
            sSorted.pop();
        }
    }
    return count;
};
