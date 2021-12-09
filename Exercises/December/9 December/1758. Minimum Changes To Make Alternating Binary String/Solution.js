/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let countFirst = 0;
    let prevFirst = +s[0];
    let countSecond = 1;
    let prevSecond = +!+s[0];
    for (let i = 1; i < s.length; i++) {
        if (+s[i] === prevFirst) {
            countFirst++;
            prevFirst = +!+s[i];
        } else {
            prevFirst = +s[i];
        }
        if (+s[i] === prevSecond) {
            countSecond++;
            prevSecond = +!+s[i];
        } else {
            prevSecond = +s[i];
        }
    }
    return Math.min(countFirst, countSecond);
};
