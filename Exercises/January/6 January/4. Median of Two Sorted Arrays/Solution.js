/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let length = nums1.length + nums2.length;
    let center = length % 2 === 1 ? Math.trunc(length / 2) : length / 2;
    if (!nums1.length) {
        return length % 2 === 1 ? nums2[center] : (nums2[center - 1] + nums2[center]) / 2;
    }
    if (!nums2.length) {
        return length % 2 === 1 ? nums1[center] : (nums1[center - 1] + nums1[center]) / 2;
    }
    let index = -1;
    let nums1Index = 0;
    let nums2Index = 0;
    let prev = null;
    let current = null;
    while (index !== center) {
        prev = current;
        if (nums2Index === nums2.length || (nums1Index !== nums1.length && nums1[nums1Index] <= nums2[nums2Index])) {
            current = nums1[nums1Index++];
        } else {
            current = nums2[nums2Index++];
        }
        index++;
    }
    return length % 2 === 1 ? current : (prev + current) / 2;
};
