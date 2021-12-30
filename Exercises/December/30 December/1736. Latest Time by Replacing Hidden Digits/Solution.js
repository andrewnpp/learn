/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let [h, m] = time.split(':');
    let newH = '';
    if (h[0] === '?' && h[1] === '?') {
        newH = '23';
    } else if (h[0] === '?') {
        if (h[1] <= 3) {
            newH += '2';
        } else {
            newH += '1'
        }
        newH += h[1];
    } else if (h[1] === '?') {
        newH += h[0];
        if (h[0] === '2') {
            newH += '3';
        } else {
            newH += '9'
        }
    }
    let newM = '';
    if (m[0] === '?' && m[1] === '?') {
        newM = '59';
    } else if (m[0] === '?') {
        newM += '5';
        newM += m[1];
    } else if (m[1] === '?') {
        newM += m[0];
        newM += '9';
    }
    return (newH || h ) + ':' + (newM || m);
};
