/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let [first, second] = edges[0];
    return edges[1].includes(first) ? first : second;
};
