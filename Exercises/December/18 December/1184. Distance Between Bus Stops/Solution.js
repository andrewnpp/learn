/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let clockwise = 0;
    let counterclockwise = 0;
    for (let i = start; i !== destination; i = (i + 1) % distance.length) {
        clockwise += distance[i];
    }
    for (let i = destination; i !== start; i = (i + 1) % distance.length) {
        counterclockwise += distance[i];
    }
    return Math.min(clockwise, counterclockwise);
};
