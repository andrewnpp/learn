/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            return false;
        }
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    if (maxIndex === 0 || maxIndex === arr.length - 1) {
        return false;
    }
    for (let i = 1; i < maxIndex; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    for (let i = maxIndex + 1; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;
};
