/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let arr = date.split(' ');
    arr[0] = ('0' + arr[0].slice(0, -2)).slice(-2);
    arr[1] = ('0' + ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(arr[1])).slice(-2);
    return arr.reverse().join('-');
};
