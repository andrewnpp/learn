/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let pointer = 0;
    for (let netGain of gain) {
        pointer += netGain;
        if (pointer > max) {
            max = pointer;
        }
    }
    return max;
};
