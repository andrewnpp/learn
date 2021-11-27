/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let arr = [];
    let tempS = 0;
    let tempD = s.length;
    for (let char of s) {
        if (char === 'I') {
            arr.push(tempS++);
        } else if (char === 'D') {
            arr.push(tempD--);
        }
    }
    if (s[s.length - 1] === 'I') {
        arr.push(tempS);
    } else if (s[s.length - 1] === 'D') {
        arr.push(tempD);
    }
    return arr;
};
