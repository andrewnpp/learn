/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let convertedS = [...s].map((item) => (item.charCodeAt(0) - 96).toString()).join('');
    let count = 0;
    while (count < k) {
        if (convertedS.length === 1) {
            break;
        }
        convertedS = [...convertedS].reduce((prev, item) => prev + +item, 0).toString();
        count++;
    }
    return +convertedS;
};
