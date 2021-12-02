/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let words = sentence.split(' ');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let aLetters = 'a';
    for (let i = 0; i < words.length; i++) {
        if (!vowels.includes(words[i][0].toLowerCase())) {
            words[i] = words[i].slice(1) + words[i][0];
        }
        words[i] += 'ma' + aLetters;
        aLetters += 'a';
    }
    return words.join(' ');
};
