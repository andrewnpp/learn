/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let [dateYear, dateMonth, dateDay] = date.split('-');
    let days = +dateDay;
    for (let month = 1; month <= dateMonth - 1; month++) {
        let tempDate = new Date(dateYear, month);
        tempDate.setDate(0);
        days += tempDate.getDate();
    }
    return days;
};
