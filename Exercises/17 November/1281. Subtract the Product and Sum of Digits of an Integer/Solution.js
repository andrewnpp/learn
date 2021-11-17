/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digits = n.toString().split('').map((item) => +item);
    let product = digits.reduce((prev, item) => prev * item, 1);
    let sum = digits.reduce((prev, item) => prev + item, 0);
    return product - sum;
};
