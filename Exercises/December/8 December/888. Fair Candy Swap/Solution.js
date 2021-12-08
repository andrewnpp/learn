/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceSet = new Set();
    let bobSet = new Set();
    let aSum = aliceSizes.reduce((prev, item) => {
        aliceSet.add(item);
        return prev + item;
    }, 0);
    let bSum = bobSizes.reduce((prev, item) => {
        bobSet.add(item);
        return prev + item;
    }, 0);
    for (let aliceSize of aliceSet) {
        for (let bobSize of bobSet) {
            if (aSum - aliceSize + bobSize === bSum - bobSize + aliceSize) {
                return [aliceSize, bobSize];
            }
        }
    }
};
