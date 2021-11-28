/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let set = new Set();
    for (let num of nums1) {
        if (nums2.includes(num) || nums3.includes(num)) {
            set.add(num);
        }
    }
    for (let num of nums2) {
        if (nums3.includes(num)) {
            set.add(num);
        }
    }
    return [...set.values()];
};
