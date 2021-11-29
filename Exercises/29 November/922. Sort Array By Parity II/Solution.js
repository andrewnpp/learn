/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let evenIndex = 0;
    let oddIndex = 1;
    let sortedArr = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            sortedArr[evenIndex] = num;
            evenIndex += 2;
        } else {
            sortedArr[oddIndex] = num;
            oddIndex += 2;
        }
    }
    return sortedArr;
};
