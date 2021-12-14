/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if (low === high) {
        return low % 2;
    }
    let result = 0;
    if (low % 2 === 1) {
        low++;
        result++;
    }
    if (high % 2 === 1) {
        high--;
        result++;
    }
    if (low === high) {
        return result;
    }
    result += (high - low) / 2;
    return result;
};
