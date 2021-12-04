/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    number = number.replace(/[ \-]+/g, '');
    let threeBlocks = Math.trunc(number.length / 3);
    let mod = number.length % 3;
    if (mod === 1) {
        threeBlocks--;
    }
    let arr = [];
    for (let i = 0; i < threeBlocks; i++) {
        arr.push(number.slice(i * 3, i * 3 + 3));
    }
    switch(mod) {
        case 1:
            arr.push(number.slice(-4, -2), number.slice(-2));
            break;
        case 2:
        case 3:
            arr.push(number.slice(-mod));
            break;
    }
    return arr.join('-');
};
