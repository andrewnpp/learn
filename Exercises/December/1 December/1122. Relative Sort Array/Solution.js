/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    arr1Map = new Map();
    for (let num of arr1) {
        arr1Map.set(num, (arr1Map.get(num) || 0) + 1);
    }
    let notInArr2 = [...new Set(arr1)].filter((item) => !arr2.includes(item)).sort((a, b) => a - b);
    let sortedArr1 = [];
    for (let num of arr2) {
        sortedArr1.push(...new Array(arr1Map.get(num)).fill(num));
    }
    for (let num of notInArr2) {
        sortedArr1.push(...new Array(arr1Map.get(num)).fill(num));
    }
    return sortedArr1;
};
