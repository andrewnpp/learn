/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let first = s.slice(0, s.length / 2);
    let second = s.slice(s.length / 2);
    function countVowels(str) {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let count = 0;
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
    return countVowels(first) === countVowels(second);
};
