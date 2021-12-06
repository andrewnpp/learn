/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    return parseInt([...n.toString(2)].map((item) => +!+item).join(''), 2);
};
