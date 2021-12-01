/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let distanceArr = [];
    for (let i = 0; i < s.length; i++) {
        let left = s.lastIndexOf(c, i);
        let right = s.indexOf(c, i);
        distanceArr.push(left !== -1 && right !== -1 ?
            Math.min(i - left, right - i) :
            left === -1 ? right - i : i - left);
    }
    return distanceArr;
};
