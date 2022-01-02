/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let open = 0;
    let depth = 0;
    for (let char of s) {
        if (char === '(') {
            open++;
            depth = Math.max(depth, open);
        } else if (char === ')') {
            open--;
        }
    }
    return depth;
};
