/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let lLogs = [];
    let dLogs = [];
    for (let log of logs) {
        let index = log.indexOf(' ');
        let regex = new RegExp(' [a-zA-Z]+');
        regex.test(log) ? lLogs.push(log) : dLogs.push(log);
    }
    lLogs.sort((a, b) => {
        let aWords = a.split(' ');
        let bWords = b.split(' ');
        let aStr = aWords.slice(1).join(',');
        let bStr = bWords.slice(1).join(',');
        if (aStr === bStr) {
            aStr = aWords[0] + ',' + aStr;
            bStr = bWords[0] + ',' + bStr;
        }
        if (aStr > bStr) {
            return 1;
        }
        if (aStr < bStr) {
            return -1;
        }
        return 0;
    });
    return [...lLogs, ...dLogs];
};
