/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let tailSize = s.length % k;
    let tail = tailSize ? s.slice(-tailSize) : '';
    let regex = new RegExp(`[a-z]{${k}}`, 'g');
    let matches = s.match(regex) || [];
    let arr = matches.map((item, index) => index % 2 === 0 ?
        [...item].reverse().join('') : item);
    return arr.join('') + (arr.length % 2 === 0 ? [...tail].reverse().join('') : tail);
};
