/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let size = 0;
    let  map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            size = i - map.get(s[i]);
            max = Math.max(max, size);
            let slice = s.slice(map.get(s[i]) + 1, i + 1);
            map.set(s[i], i);
            for (let [key] of map) {
                if (!slice.includes(key)) {
                    map.delete(key);
                }
            }
        } else {
            map.set(s[i], i);
            max = Math.max(max, ++size);
        }
    }
    return max;
};
