/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let sX = x.toString(2);
    let sY = y.toString(2);
    let i = sX.length - 1;
    let j = sY.length - 1;
    let count = 0;
    while (i >= 0 && j >= 0) {
        if (sX[i--] !== sY[j--]) {
            count++;
        }
    }
    if (i == -1 && j === -1) {
        return count;
    }
    let index, bigger;
    if (sX.length > sY.length) {
        bigger = sX;
        index = i;
    } else {
        bigger = sY;
        index = j;
    }
    while (index >= 0) {
        if (bigger[index--] === '1') {
            count++;
        }
    }
    return count;
};
