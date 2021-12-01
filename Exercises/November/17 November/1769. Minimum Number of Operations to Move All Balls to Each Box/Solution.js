/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let result = [];
    let arr = [...boxes].map((item, index) => ({item: +item, index})).filter((obj) => obj.item !== 0);
    for (let i = 0; i < boxes.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].index !== i) {
                count += arr[j].item * Math.abs(arr[j].index - i);
            }
        }
        result.push(count);
    }
    return result;
};
