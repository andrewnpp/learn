/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let tempArr = [...arr].sort((a, b) => b - a);
    let difference = tempArr[0] - tempArr[1];
    for (let i = 2; i < tempArr.length; i++) {
        if (tempArr[i - 1] - tempArr[i] !== difference) {
            return false;
        }
    }
    return true;
};
