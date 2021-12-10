/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let str = [...n.toString()];
    let threesMod = str.length % 3;
    let threes = (str.length - threesMod) / 3;
    if (!threes) {
        return n.toString();
    }
    let index = 0;
    if (threesMod) {
        str.splice(threesMod, 0, '.');
        index = threesMod + 1;
    }
    for (let i = 1; i < threes; i++) {
        str.splice(index + 3, 0, '.');
        index += 4;
    }
    return str.join('');
};
