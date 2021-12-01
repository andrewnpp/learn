/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let num1 = 0, num2 = 1;
    for (let i = 2; i <= n; i++) {
        let temp = num1;
        num1 = num2;
        num2 = temp + num2;
    }
    return num2;
};
