/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let secondZerosOnes = [0, 0];
    for (let char of s) {
        secondZerosOnes[char]++;
    }
    let firstZerosOnes = [0, 0];
    let max = 0;
    for (let i = 0; i < s.length - 1; i++) {
        secondZerosOnes[s[i]]--;
        firstZerosOnes[s[i]]++;
        let score = firstZerosOnes[0] + secondZerosOnes[1];
        max = Math.max(max, score);
    }
    return max;
};
