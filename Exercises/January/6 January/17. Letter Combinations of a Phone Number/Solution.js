/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    let map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    let answer = map.get(digits[0]);
    for (let i = 1; i < digits.length; i++) {
        let copy = [...answer];
        answer = [];
        let values = map.get(digits[i]);
        for (let value of values) {
            answer.push(...copy.map((item) => item + value));
        }
    }
    return answer;
};
