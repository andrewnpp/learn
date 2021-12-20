/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.match(/\S+/g)?.length || 0;
};
