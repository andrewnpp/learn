/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map((customer) => customer.reduce((prev, item) => prev + item, 0)));
};
