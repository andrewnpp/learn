/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let rowMap = new Map();
    for (let i = 0; i < mat.length; i++) {
        rowMap.set(i, 0);
    }
    for (let i = 0; i < mat.length; i++) {
        for (let person of mat[i]) {
            if (person === 1) {
                rowMap.set(i, rowMap.get(i) + 1);
            }
        }
    }
    return [...rowMap].sort(([ , v1], [ , v2]) => v1 - v2).map(([k, v]) => k).slice(0, k);
};
