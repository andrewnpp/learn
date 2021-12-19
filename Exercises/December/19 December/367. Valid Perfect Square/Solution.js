/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 0;
    while ((i + 1) ** 2 <= num) {
        i++;
    }
    if (num % i === 0 && i === num / i) {
        return true;
    }
    return false;
};
