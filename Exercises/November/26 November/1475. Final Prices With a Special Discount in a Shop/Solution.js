/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let arr = [];
    for (let i = 0; i < prices.length; i++) {
        let discount = 0;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discount = prices[j];
                break;
            }
        }
        arr.push(prices[i] - discount);
    }
    return arr;
};
