/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let subLength = 1;
    while (subLength <= arr.length) {
        let firstElement = arr[0];
        let tempSum = arr.slice(0, subLength).reduce((prev, item) => prev + item, 0);
        sum += tempSum;
        for (let i = 1; i <= arr.length - subLength; i++) {
            tempSum -= firstElement;
            firstElement = arr[i];
            tempSum += arr[i + subLength - 1];
            sum += tempSum;
        }
        subLength += 2;
    }
    return sum;
};
