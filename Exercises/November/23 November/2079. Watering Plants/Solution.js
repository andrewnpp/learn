/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let water = capacity;
    let atRiver = true;
    for (let i = 0; i < plants.length; i++) {
        if (water < plants[i]) {
            steps += i * 2 + 1;
            water = capacity;
        } else {
            steps++;
        }
        water -= plants[i];
    }
    return steps;
};
