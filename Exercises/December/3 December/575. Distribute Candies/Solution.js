/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set = new Set(candyType);
    if (set.size < candyType.length / 2) {
        return set.size;
    }
    return candyType.length / 2;
};
