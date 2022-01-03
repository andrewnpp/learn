/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return num === +[...(+[...num.toString()].reverse().join('')).toString()].reverse().join('');
};
