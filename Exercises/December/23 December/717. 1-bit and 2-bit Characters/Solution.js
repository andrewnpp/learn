/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let str = bits.join('');
    while(str.length > 2) {
        let slice = str.slice(0, 2);
        (slice === '11' || slice === '10') ? str = str.slice(2) : str = str.slice(1);
    }
    if (str === '00' || str === '0') {
        return true;
    }
    return false;
};
