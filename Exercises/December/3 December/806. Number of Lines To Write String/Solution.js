/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let sum = 0;
    let count = 1;
    for (let char of s) {
        let width = widths[char.charCodeAt(0) - 97];
        if (sum + width <= 100) {
            sum += width;
        } else {
            count++;
            sum = width;
        }
    }
    return [count, sum];
};
