/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let largeGroups = [];
    let start = 0;
    let end;
    s += ' ';
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] !== s[i]) {
            end = i - 1;
            if (end - start + 1 >= 3) {
                largeGroups.push([start, end]);
            }
            start = i;
        }
    }
    return largeGroups;
};
