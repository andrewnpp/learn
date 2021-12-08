/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let pointer = k;
    let time = 0;
    while (true) {
        for (let i = 0; i < tickets.length; i++) {
            tickets[i]--;
            time++;
            if (tickets[i] === 0) {
                if (i === pointer) {
                    return time;
                } else {
                    tickets.shift();
                }
            } else {
                tickets.push(tickets.shift());
                if (i === pointer) {
                    pointer = tickets.length;
                }
            }
            pointer--;
            i--;
        }
    }
};
