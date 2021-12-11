/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let letters = s.match(/[a-z]/g) || [];
    let digits = s.match(/\d/g) || [];
    if (Math.abs(letters.length - digits.length) > 1) {
        return '';
    }
    let result = [];
    function compute(biggerArr, smallerArr) {
        while (biggerArr.length) {
            result.push(biggerArr.pop());
            if (smallerArr.length) {
                result.push(smallerArr.pop());
            }
        }
    }
    letters.length >= digits.length ? compute([...letters], [...digits]) : compute([...digits], [...letters]);
    return result.join('');
};
