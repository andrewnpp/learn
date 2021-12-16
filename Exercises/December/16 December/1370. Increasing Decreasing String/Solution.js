/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let charCount = s.length;
    let sortedArr = [...s].sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
    let map = new Map();
    for (let char of sortedArr) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let arr = [...map];
    let index = 0;
    let fromStart = true;
    let result = '';
    while (charCount !== 0) {
        let [key, val] = arr[index];
        if (val > 0) {
            result += key;
            arr[index][1]--;
            charCount--;
        }
        if (fromStart) {
            index + 1 === arr.length ? fromStart = false : index++;
        } else {
            index - 1 === -1 ? fromStart = true : index--;
        }
    }
    return result;
};
