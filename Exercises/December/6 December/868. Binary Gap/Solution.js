/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let str = n.toString(2);
    let regEx = /10*1/g;
    let max = 0;
    let match = regEx.exec(str);
    regEx.lastIndex--;
    while (match) {
        if (match[0].length - 1 > max) {
            max = match[0].length - 1;
        }
        regEx.lastIndex--;
        match = regEx.exec(str);
    }
    return max;
};
