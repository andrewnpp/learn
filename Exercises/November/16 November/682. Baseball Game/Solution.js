/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let arr = [];
    for (let op of ops) {
        switch(op) {
            case '+':
                arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
                break;
            case 'D':
                arr.push(arr[arr.length - 1] * 2);
                break;
            case 'C':
                arr.pop();
                break;
            default:
                arr.push(+op);
                break;
        }
    }
    return arr.reduce((prev, item) => prev + item, 0);
};
