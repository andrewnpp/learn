/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let result = new Array(k).fill(0);
    let uniqueStrLogs = [...new Set(logs.map((item) => item.toString()))];
    let userActionsCount = {};
    for (let strLog of uniqueStrLogs) {
        let user = strLog.split(',')[0];
        userActionsCount[user] = (userActionsCount[user] || 0) + 1;
    }
    for (let count in userActionsCount) {
        result[userActionsCount[count] - 1]++;
    }
    return result;
};
