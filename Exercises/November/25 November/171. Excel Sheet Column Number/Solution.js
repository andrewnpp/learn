/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let numsArr = columnTitle.split('').map((item) => item.codePointAt(0) - 64).reverse();
    let result = 0;
    for (let i = 0; i < numsArr.length; i++) {
        result += numsArr[i] * (26 ** i);
    }
    return result;
};
