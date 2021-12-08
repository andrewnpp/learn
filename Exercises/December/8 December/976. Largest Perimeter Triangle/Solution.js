/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let arr = [...nums].sort((a, b) => b - a);
    for (let i = 2; i < arr.length; i++) {
        let [first, second, third] = arr.slice(i - 2, i + 1);
        if (third < second + first
            && second < third + first
            && first < third + second
        ) {
            return first + second + third;
        }
    }
    return 0;
};
