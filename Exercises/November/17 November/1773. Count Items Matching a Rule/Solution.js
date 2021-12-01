/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    items.forEach(([type, color, name]) => {
        switch (ruleKey) {
            case 'type':
                count += +(type === ruleValue);
                break;
            case 'color':
                count += +(color === ruleValue);
                break;
            case 'name':
                count += +(name === ruleValue);
                break;
        }
    });
    return count;
};
