/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let larger = null;
    for (let letter of letters) {
        if (letter > target) {
            larger = letter;
            break;
        }
    }
    return larger || letters[0];
};
