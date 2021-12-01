/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let smallest;
    let result = -1;
    for (let i = 0; i < points.length; i++) {
        let [pX, pY] = points[i];
        if (pX === x || pY === y) {
            let distance = Math.abs(pX - x) + Math.abs(pY - y);
            if (result === -1 || distance < smallest) {
                smallest = distance;
                result = i;
            }
        }
    }
    return result;
};
