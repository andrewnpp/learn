/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (!trust.length && n === 1) {
        return 1;
    }
    let mapTrusts = new Map();
    let mapTrusted = new Map();
    for (let [a, b] of trust) {
        if (!mapTrusts.has(a)) {
            mapTrusts.set(a, []);
        }
        mapTrusts.get(a).push(b);
        if (!mapTrusted.has(b)) {
            mapTrusted.set(b, []);
        }
        mapTrusted.get(b).push(a);
    }
    let answer = -1;
    for (let [person, trusted] of mapTrusted) {
        if (trusted.length === n - 1 && !mapTrusts.has(person)) {
            if (answer === -1) {
                answer = person;
            } else {
                return person;
            }
        }
    }
    return answer;
};
