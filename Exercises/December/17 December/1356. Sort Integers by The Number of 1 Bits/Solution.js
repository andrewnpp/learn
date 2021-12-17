/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let countArr = [];
    let map = new Map();
    for (let num of arr) {
        if (!map.has(num)) {
            map.set(num, [...num.toString(2)].reduce((prev, item) => prev + +item, 0));
        }
        countArr.push([num, map.get(num)]);
    }
    countArr.sort(([num1, count1], [num2, count2]) => {
        if (count1 > count2) {
            return 1;
        }
        if (count1 < count2) {
            return -1;
        }
        return num1 - num2;
    });
    return countArr.map(([key, val]) => key);
};
