/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let first = s.slice(0, Math.ceil(s.length / 2));
    let second = [...s.slice(Math.floor(s.length / 2))].reverse().join('');
    if (first === second) {
        return true;
    }
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            let compare1, compare2;
            if (s.length % 2 === 1) {
                compare1 = first.slice(0, i) + first.slice(i + 1) === second.slice(0, -1);
                compare2 = second.slice(0, i) + second.slice(i + 1) === first.slice(0, -1);
            } else {
                compare1 = first === second.slice(0, i) + second.slice(i + 1) + first[first.length - 1];
                compare2 = second === first.slice(0, i) + first.slice(i + 1) + second[first.length - 1];
            }
            return compare1 || compare2;
        }
    }
};
