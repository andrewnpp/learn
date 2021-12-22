/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = n;
    let arr = [...flowerbed];
    for (let i = 0; i < arr.length && count > 0; i++) {
        let left = i - 1 >= 0 ? arr[i - 1] : 0;
        let right = i + 1 < arr.length ? arr[i + 1] : 0;
        if (!arr[i] && !left && !right) {
            arr[i] = 1;
            count--;
        }
    }
    return !count;
};
