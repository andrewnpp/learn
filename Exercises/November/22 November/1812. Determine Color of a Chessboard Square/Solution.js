/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let [x, y] = coordinates.split('');
    if (+y % 2 === 1) {
        if ((x.charCodeAt(0) - 97) % 2 === 1) {
            return true;
        }
        return false;
    } else {
        if ((x.charCodeAt(0) - 97) % 2 === 1) {
            return false;
        }
        return true;
    }
};
