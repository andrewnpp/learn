/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] * 2) && arr.lastIndexOf(arr[i] * 2) !== i) {
            return true;
        }
    }
    return false;
};
