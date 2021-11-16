/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxBefore = Math.max(...candies);
    return candies.map((item) => item + extraCandies >= maxBefore);
};
