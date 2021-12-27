/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let regex = new RegExp(`(^| )${first} ${second} ([a-z]+)`, 'g');
    let match = regex.exec(text);
    let answer = [];
    while (match) {
        answer.push(match[2]);
        regex.lastIndex -= first.length + 1 + second.length + 1;
        match = regex.exec(text);
    }
    return answer;
};
