/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let answer;
    let flag = true;
    function goThrough(from, to) {
        if (flag) {
            let center = from + Math.trunc((to - from) / 2);
            let pick = guess(center);
            if (pick === 0) {
                flag = false;
                answer = center;
            } else if (pick === -1) {
                goThrough(from, center - 1);
            } else {
                goThrough(center + 1, to);
            }
        }
    }
    goThrough(1, n);
    return answer;
};
