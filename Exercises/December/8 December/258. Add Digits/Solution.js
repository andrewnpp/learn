/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = num.toString();
    while (str.length !== 1) {
        str = [...str].reduce((prev, item) => prev + +item, 0).toString();
    }
    return +str;
};
