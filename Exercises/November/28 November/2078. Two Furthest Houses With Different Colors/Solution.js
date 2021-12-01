/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let colorsSet = new Set(colors);
    let max = 1;
    for (let color of colorsSet) {
        let forward;
        for (let i = colors.length - 1; i >= 0; i--) {
            if (colors[i] !== color) {
                forward = i - colors.indexOf(color);
                break;
            }
        }
        let backward;
        for (let i = 0; i < colors.length; i++) {
            if (colors[i] !== color) {
                backward = colors.lastIndexOf(color) - i;
                break;
            }
        }
        max = Math.max(forward, backward, max);
    }
    return max;
};
