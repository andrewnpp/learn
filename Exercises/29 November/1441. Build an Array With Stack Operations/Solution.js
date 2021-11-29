/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < target.length; i++) {
        while (count !== target[i]) {
            count++;
            arr.push('Push');
            if (count !== target[i]) {
                arr.push('Pop');
            }
        }
    }
    return arr;
};
