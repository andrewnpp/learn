/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fiveTenTwenty = [0, 0, 0];
    for (let bill of bills) {
        if (bill === 5) {
            fiveTenTwenty[0]++;
        } else if (bill === 10) {
            if (fiveTenTwenty[0]) {
                fiveTenTwenty[0]--;
                fiveTenTwenty[1]++;
            } else {
                return false;
            }
        } else if (bill === 20) {
            if (fiveTenTwenty[1] && fiveTenTwenty[0]) {
                fiveTenTwenty[1]--;
                fiveTenTwenty[0]--;
                fiveTenTwenty[2]++;
            } else if (fiveTenTwenty[0] >= 3) {
                fiveTenTwenty[0] -= 3;
                fiveTenTwenty[2]++;
            } else {
                return false;
            }
        }
    }
    return true;
};
