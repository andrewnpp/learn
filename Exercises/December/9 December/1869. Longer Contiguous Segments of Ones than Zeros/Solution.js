/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let onesMax = Math.max(...s.split(/0+/).map((item) => item.length));
    let zerosMax = Math.max(...s.split(/1+/).map((item) => item.length));
    if (onesMax > zerosMax) {
        return true;
    }
    return false;
};
