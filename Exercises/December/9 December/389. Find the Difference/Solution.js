/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let mapS = new Map();
    for (let char of s) {
        mapS.set(char, (mapS.get(char) || 0) + 1);
    }
    let mapT = new Map();
    for (let char of t) {
        mapT.set(char, (mapT.get(char) || 0) + 1);
    }
    for (let [key, val] of mapT) {
        if (mapS.get(key) !== val) {
            return key;
        }
    }
};
