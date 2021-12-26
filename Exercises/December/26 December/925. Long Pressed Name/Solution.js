/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let regex = new RegExp(`([a-z])(\\1)*`, 'g');
    let nameMatches = name.match(regex);
    regex.lastIndex = 0;
    let typedMatches = typed.match(regex);
    if (nameMatches.length !== typedMatches.length) {
        return false;
    }
    for (let i = 0; i < nameMatches.length; i++) {
        if (!typedMatches[i].includes(nameMatches[i])) {
            return false;
        }
    }
    return true;
};
