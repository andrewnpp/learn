/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let arr = s.match(/\b\d+\b/g);
    for (let i = 1; i < arr.length; i++) {
        if (+arr[i - 1] >= +arr[i]) {
            return false;
        }
    }
    return true;
};
