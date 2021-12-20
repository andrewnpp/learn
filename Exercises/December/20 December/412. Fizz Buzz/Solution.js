/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let temp = '';
        if (i % 3 === 0) {
            temp += 'Fizz';
        }
        if (i % 5 === 0) {
            temp += 'Buzz';
        }
        answer.push(temp ? temp : i.toString());
    }
    return answer;
};
