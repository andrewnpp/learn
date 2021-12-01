/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    function getLastIndex(char, charSet) {
        charSet.add(char);
        let start = s.indexOf(char);
        let end = s.lastIndexOf(char);
        let strSet = new Set([...s.slice(start, end)].filter((item) => !charSet.has(item)));
        let maxs = [end];
        for (let uniqueChar of strSet) {
            maxs.push(getLastIndex(uniqueChar, charSet));
        }
        return Math.max(...maxs);
    }
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let start = i;
        let charSet = new Set();
        let end = getLastIndex(s[i], charSet);
        i = end;
        result.push(end - start + 1);
    }
    return result;
};
