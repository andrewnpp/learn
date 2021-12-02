/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    return (salary.reduce((prev, item) => prev + item, 0) - Math.min(...salary) - Math.max(...salary)) / (salary.length - 2);
};
