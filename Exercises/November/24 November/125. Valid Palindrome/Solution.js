/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let forward = s.toLowerCase().replace(/[\W_]/g, '');
    let backward = [...forward].reverse().join('');
    return forward === backward;
};
