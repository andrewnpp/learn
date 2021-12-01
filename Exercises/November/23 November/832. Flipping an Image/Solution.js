/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    image.forEach((row) => row.reverse());
    image.forEach((row) => row.forEach((item, index, arr) => arr[index] = +(!arr[index])));
    return image;
};
