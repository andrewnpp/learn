/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if (![...num].some((item) => ['1','3','5','7','9'].includes(item))) {
        return '';
    }
    for (let size = num.length; size >= 1; size--) {
        let max = null;
        for (let i = 0; i <= num.length - size; i++) {
            let str = num.slice(i, i + size);
            if (str[str.length - 1] % 2 === 1) {
                if (max === null || max < str) {
                    max = str;
                }
            }
        }
        if (max !== null) {
            return max;
        }
    }
    return '';
};
