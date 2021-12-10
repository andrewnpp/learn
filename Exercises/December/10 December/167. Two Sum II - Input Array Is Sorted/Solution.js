/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let set = new Set();
    for (let i = 0; i < numbers.length - 1; i++) {
        if (set.has(numbers[i])) {
            continue;
        }
        set.add(numbers[i]);
        let lookFor = target - numbers[i];
        let index = numbers.lastIndexOf(lookFor);
        if (index !== -1 && index > i) {
            return [i + 1, index + 1];
        }
    }
};
