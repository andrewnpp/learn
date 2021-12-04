/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let monday = 1;
    let sum = 0;
    let deposit = 1;
    for (let i = 1; i <= n; i++) {
        if (i > 7 && i % 7 === 1) {
            monday++;
            deposit = monday;
        }
        sum += deposit;
        deposit++;
    }
    return sum;
};
