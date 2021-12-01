/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let prop = '';
    switch(carType) {
        case 1:
            prop = 'big';
            break;
        case 2:
            prop = 'medium';
            break;
        case 3:
            prop = 'small';
            break;
    }
    if (this[prop] > 0) {
        this[prop]--;
        return true;
    } else {
        return false;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
