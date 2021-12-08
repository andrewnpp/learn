/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let longest = releaseTimes[0];
    let key = keysPressed[0];
    for (let i = 1; i < releaseTimes.length; i++) {
        let duration = releaseTimes[i] - releaseTimes[i - 1];
        if (duration > longest) {
            longest = duration;
            key = keysPressed[i];
        } else if (duration === longest && keysPressed[i] > key) {
            key = keysPressed[i];
        }
    }
    return key;
};
