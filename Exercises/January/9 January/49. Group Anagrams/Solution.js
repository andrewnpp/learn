/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let strsMaps = [];
    for (let str of strs) {
        let map = new Map();
        for (let char of str) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        strsMaps.push(map);
    }
    let set = new Set();
    let answer = [];
    for (let i = 0; i < strsMaps.length; i++) {
        if (set.has(i)) {
            continue;
        }
        let group = [strs[i]];
        set.add(i);
        cycle: for (let j = 0; j < strsMaps.length; j++) {
            if (i === j || set.has(j) || strsMaps[i].size !== strsMaps[j].size) {
                continue;
            }
            for (let [key, val] of strsMaps[i]) {
                if (strsMaps[j].get(key) !== val) {
                    continue cycle;
                }
            }
            group.push(strs[j]);
            set.add(j);
        }
        answer.push(group);
    }
    return answer;
};
