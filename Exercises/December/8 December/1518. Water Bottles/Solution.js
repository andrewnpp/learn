/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let count = 0;
    let fullBottles = numBottles;
    let emptyBottles = 0;
    while (fullBottles) {
        count += fullBottles;
        emptyBottles += fullBottles;
        fullBottles = Math.trunc(emptyBottles / numExchange);
        emptyBottles %= numExchange;
    }
    return count;
};
