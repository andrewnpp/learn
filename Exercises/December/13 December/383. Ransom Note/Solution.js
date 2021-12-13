/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let noteMap = new Map();
    for (let letter of ransomNote) {
        noteMap.set(letter, (noteMap.get(letter) || 0) + 1);
    }
    let magMap = new Map();
    for (let letter of magazine) {
        magMap.set(letter, (magMap.get(letter) || 0) + 1);
    }
    for (let [noteKey, noteVal] of noteMap) {
        let magVal = magMap.get(noteKey);
        if (!magVal || magVal < noteVal) {
            return false;
        }
    }
    return true;
};
