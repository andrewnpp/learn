/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let [[ax, ay], [bx, by], [cx, cy]] = points;
    let ba = [ax - bx, ay - by];
    let bc = [cx - bx, cy - by];
    let baMod = Math.sqrt(ba[0] ** 2 + ba[1] ** 2);
    let bcMod = Math.sqrt(bc[0] ** 2 + bc[1] ** 2);
    let cos = (ba[0] * bc[0] + ba[1] * bc[1]) / (baMod * bcMod);
    return -Math.abs(cos) + 1 >= 1e-8;
};
