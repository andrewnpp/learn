/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let first = [...new Set(digits.filter((item) => item !== 0))];
    let second = [...new Set(digits)];
    let third = [...new Set(digits.filter((item) => item % 2 === 0))];
    let map = new Map();
    for (let digit of digits) {
        map.set(digit, (map.get(digit) || 0) + 1);
    }
    let arr = [];
    for (let fDigit of first) {
        let numStr = '';
        let fMap = new Map(map);
        fMap.set(fDigit, fMap.get(fDigit) - 1);
        numStr += fDigit;
        for (let sDigit of second) {
            numStr = numStr.slice(0, 1);
            let sMap = new Map(fMap);
            if (sMap.get(sDigit) < 1) {
                continue;
            }
            sMap.set(sDigit, sMap.get(sDigit) - 1);
            numStr += sDigit;
            for (let tDigit of third) {
                numStr = numStr.slice(0, 2);
                if (sMap.get(tDigit) < 1) {
                    continue;
                }
                sMap.set(tDigit, sMap.get(tDigit) - 1);
                numStr += tDigit;
                arr.push(+numStr);
            }
        }
    }
    return arr.sort((a, b) => a - b);
};
