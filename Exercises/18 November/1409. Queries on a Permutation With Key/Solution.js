/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let arr = [];
    for (let i = 1; i <= m; i++) {
        arr.push(i);
    }
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let index = arr.indexOf(queries[i]);
        result.push(index);
        arr.unshift(...arr.splice(index, 1));
    }
    return result;
};
