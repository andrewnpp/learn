/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let arr1 = [...s1];
    let count = 0;
    let indexToSwap = null;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (indexToSwap === null) {
                indexToSwap = i;
            } else {
                if (count + 1 > 2) {
                    return false;
                }
                let temp = arr1[i];
                arr1[i] = arr1[indexToSwap];
                arr1[indexToSwap] = temp;
                return arr1.join('') === s2;
            }
            count++;
        }
    }
    return !count;
};
