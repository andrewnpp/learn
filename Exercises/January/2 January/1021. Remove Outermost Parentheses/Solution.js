/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let open = 0;
    let start, end;
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (open === 0) {
                start = i;
            }
            open++;
        } else if (s[i] === ')') {
            open--;
            if (open === 0) {
                end = i;
                answer += s.slice(start + 1, end);
            }
        }
    }
    return answer;
};
