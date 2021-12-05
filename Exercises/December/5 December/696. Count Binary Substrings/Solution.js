/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    if (s.length === 1) {
        return 0;
    }
    let result = 0;
    let zerosOnesArr = [0, 0];
    let prev = s[0];
    zerosOnesArr[prev]++;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === prev) {
            zerosOnesArr[s[i]]++;
        } else {
            if (zerosOnesArr[0] && zerosOnesArr[1]) {
                result += Math.min(...zerosOnesArr);
            }
            zerosOnesArr[s[i]] = 1;
            prev = s[i];
        }
    }
    result += Math.min(...zerosOnesArr);
    return result;
};
