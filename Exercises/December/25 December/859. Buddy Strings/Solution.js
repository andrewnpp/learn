/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s === goal) {
        let map = new Map();
        for (let letter of s) {
            map.set(letter, (map.get(letter) || 0) + 1);
            if (map.get(letter) > 1) {
                return true;
            }
        }
        return false;
    }
    let indexSwap = null;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            count++;
            if (indexSwap !== null) {
                let newS = s.slice(0, indexSwap) + s[i] + s.slice(indexSwap + 1, i) + s[indexSwap] + s.slice(i + 1);
                return newS === goal;
            }
            indexSwap = i;
        }
    }
    return false;
};
