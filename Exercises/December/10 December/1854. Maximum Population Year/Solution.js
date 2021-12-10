/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let map = new Map();
    for (let [birth, death] of logs) {
        for (let year = birth; year < death; year++) {
            map.set(year, (map.get(year) || 0) + 1);
        }
    }
    let max = Math.max(...map.values());
    let earliestMax = Math.min(...[...map].filter(([ , val]) => val === max).map(([key, val]) => key));
    return earliestMax;
};
