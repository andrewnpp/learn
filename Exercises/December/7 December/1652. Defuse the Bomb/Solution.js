/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if (k === 0) {
        return new Array(code.length).fill(0);
    }
    let decrypted = [];
    let extended = [...code, ...code, ...code];
    for (let j = 0, i = code.length; i < code.length * 2; j++, i++) {
        if (k > 0) {
            decrypted[j] = extended.slice(i + 1, i + 1 + k).reduce((prev, item) => prev + item, 0);
        } else {
            decrypted[j] = extended.slice(i + k, i).reduce((prev, item) => prev + item, 0);
        }
    }
    return decrypted;
};
