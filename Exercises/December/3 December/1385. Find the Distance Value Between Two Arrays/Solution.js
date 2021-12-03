/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let distance = arr1.length;
    cycle: for (let elem1 of arr1) {
        for (let elem2 of arr2) {
            if (Math.abs(elem1 - elem2) <= d) {
                distance--;
                continue cycle;
            }
        }
    }
    return distance;
};
