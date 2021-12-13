/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = [...score].sort((a, b) => b - a);
    return score.map((item) => {
        let index = sorted.indexOf(item);
        switch(index) {
            case 0:
                return 'Gold Medal';
            case 1:
                return 'Silver Medal';
            case 2:
                return 'Bronze Medal';
            default:
                return `${index + 1}`;
        }
    });
};
