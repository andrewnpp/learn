/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let digArr = [...num.toString()];
    for (let i = 0; i < digArr.length; i++) {
        if (digArr[i] === '6') {
            digArr[i] = '9';
            return +digArr.join('');
        }
    }
    return num;
};
