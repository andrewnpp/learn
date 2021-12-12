/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let chars = [...new Set(s)];
    for (let i = 0; i < chars.length; i++) {
        let regex = new RegExp(`(${chars[i]}){3}`, 'g');
        let temp = s.replace(regex, '$1$1');
        if (s !== temp) {
            i = -1;
        }
        s = temp;
    }
    return s;
};
