/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let setArr = [...new Set(s.toLowerCase())];
    for (let i = 0; i < setArr.length; i++) {
        let char = setArr[i];
        let regex = new RegExp(`(${char}${char.toUpperCase()})+|(${char.toUpperCase()}${char})+`, 'g');
        let temp = s.replace(regex, '');
        if (s !== temp) {
            i = -1;
        }
        s = temp;
    }
    return s;
};
