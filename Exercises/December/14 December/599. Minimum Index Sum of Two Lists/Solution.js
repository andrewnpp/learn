/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let min = null;
    let listMap = new Map();
    for (let i = 0; i < list1.length; i++) {
        let name = list1[i];
        let j = list2.indexOf(name);
        if (j !== -1) {
            let index = i + j;
            if (min === null || index < min) {
                min = index;
            }
            if (!listMap.has(index)) {
                listMap.set(index, []);
            }
            listMap.get(index).push(list1[i]);
        }
    }
    return listMap.get(min);
};
