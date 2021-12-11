/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let set = new Set(s);
    for (let char of set) {
        let index = s.indexOf(char);
        if (index === s.lastIndexOf(char)) {
            return index;
        }
    }
    return -1;
};
