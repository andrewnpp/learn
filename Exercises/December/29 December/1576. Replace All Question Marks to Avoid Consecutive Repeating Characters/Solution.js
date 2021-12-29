/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let arr = [...s];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            let left = i - 1 >= 0 ? arr[i - 1] : '';
            let right = i + 1 < arr.length ? arr[i + 1] : '';
            for (let letter of ['a', 'b', 'c']) {
                if (letter !== left && letter !== right) {
                    arr[i] = letter;
                    break;
                }
            }
        }
    }
    return arr.join('');
};
