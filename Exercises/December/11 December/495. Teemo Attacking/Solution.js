/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let seconds = 0;
    let start = null;
    let end = null;
    for (let time of timeSeries) {
        if (start !== null && end !== null) {
            if (time > end) {
                seconds += end - start + 1;
            } else {
                seconds += time - start;
            }
        }
        start = time;
        end = time + duration - 1;
    }
    seconds += end - start + 1;
    return seconds;
};
