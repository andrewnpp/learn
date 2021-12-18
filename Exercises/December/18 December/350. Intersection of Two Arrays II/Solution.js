/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = new Map();
    for (let num of nums1) {
        map1.set(num, (map1.get(num) || 0) + 1);
    }
    let map2 = new Map();
    for (let num of nums2) {
        map2.set(num, (map2.get(num) || 0) + 1);
    }
    let arr = [];
    for (let [key, val] of map1) {
        if (map2.has(key)) {
            arr.push(...new Array(Math.min(val, map2.get(key))).fill(key));
        }
    }
    return arr;
};
