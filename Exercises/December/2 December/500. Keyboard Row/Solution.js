/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows = [
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
    ];
    let result = [];
    cycle: for (let word of words) {
        let rowIndex = null;
        for (let char of word) {
            if (rowIndex === null) {
                for (let i = 0; i < rows.length; i++) {
                    if (rows[i].includes(char.toLowerCase())) {
                        rowIndex = i;
                        break;
                    }
                }
            } else if (!rows[rowIndex].includes(char.toLowerCase())) {
                continue cycle;
            }
        }
        result.push(word);
    }
    return result;
};
