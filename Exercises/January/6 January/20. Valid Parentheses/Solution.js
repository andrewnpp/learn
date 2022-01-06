/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let [openA, openB, openC] = new Array(3).fill(0);
    let order = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                openA++;
                order.push(')');
                break;
            case ')':
                openA--;
                if (order.pop() !== ')' || openA < 0) {
                    return false;
                }
                break;
            case '{':
                openB++;
                order.push('}');
                break;
            case '}':
                openB--;
                if (order.pop() !== '}' || openB < 0) {
                    return false;
                }
                break;
            case '[':
                openC++;
                order.push(']');
                break;
            case ']':
                openC--;
                if (order.pop() !== ']' || openC < 0) {
                    return false;
                }
                break;
        }
    }
    if (openA !== 0 || openB !== 0 || openC !== 0) {
        return false;
    }
    return true;
};
