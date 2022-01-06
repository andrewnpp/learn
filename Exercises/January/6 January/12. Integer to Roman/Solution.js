/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = 'M'.repeat(Math.trunc(num / 1000));
    function getRoman(num, one, five, ten) {
        switch (num) {
            case 1:
            case 2:
            case 3:
                roman += one.repeat(num);
                break;
            case 4:
                roman += one + five;
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                roman += five + one.repeat(num - 5);
                break;
            case 9:
                roman += one + ten;
                break;
        }
    }
    let hundreds = Math.trunc((num % 1000) / 100);
    getRoman(hundreds, 'C', 'D', 'M');
    let tens = Math.trunc((num % 100) / 10);
    getRoman(tens, 'X', 'L', 'C');
    let units = num % 10;
    getRoman(units, 'I', 'V', 'X');
    return roman;
};
