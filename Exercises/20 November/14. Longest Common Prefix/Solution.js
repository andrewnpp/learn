/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonStr = '';
    let chars = [...strs[0]];
    for (let i = 0; i < chars.length; i++) {
        let equal = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== chars[i]) {
                equal = false;
                break;
            }
        }
        if (equal) {
            commonStr += chars[i];
        } else {
            break;
        }
    }
    return commonStr;
};
