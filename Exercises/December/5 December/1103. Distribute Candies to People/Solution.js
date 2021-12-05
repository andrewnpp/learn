/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let count = candies;
    let people = new Array(num_people).fill(0);
    let num = 1;
    let index = 0;
    while (1) {
        if (count < num) {
            people[index] += count;
            break;
        }
        people[index] += num;
        count -= num;
        num++;
        index = ++index % num_people;
    }
    return people;
};
