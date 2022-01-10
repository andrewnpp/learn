/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let count = 0;
    for (let size = 1; size <= s.length; size++) {
        let usedStrs = new Map();
        for (let i = 0; i <= s.length - size; i++) {
            let str = s.slice(i, i + size);
            if (usedStrs.has(str)) {
                count += usedStrs.get(str);
                continue;
            }
            let strCount = 0;
            let strMap = new Map();
            for (let char of str) {
                strMap.set(char, (strMap.get(char) || 0) + 1);
            }
            cycle: for (let j = 0; j <= t.length - size; j++) {
                let tStr = t.slice(j, j + size);
                let missing = 0;
                for (let k = 0; k < tStr.length; k++) {
                    if (str[k] !== tStr[k]) {
                        missing++;
                        if (missing > 1) {
                            continue cycle;
                        }
                    }
                }
                if (missing === 1) {
                    strCount++;
                    count++;
                }
            }
            usedStrs.set(str, strCount);
        }
    }
    return count;
};
