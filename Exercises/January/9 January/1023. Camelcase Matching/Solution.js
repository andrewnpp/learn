/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    let str = '^[a-z]*' + pattern.split('').join('[a-z]*') + '[a-z]*$';
    return queries.map((item) => new RegExp(str).test(item));
};
