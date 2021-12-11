/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let start = image[sr][sc];
    if (start === newColor) {
        return image;
    }
    function goThrough(i, j) {
        if (image[i][j] === start) {
            image[i][j] = newColor;
            if (i - 1 >= 0) {
                goThrough(i - 1, j);
            }
            if (i + 1 < image.length) {
                goThrough(i + 1, j);
            }
            if (j - 1 >= 0) {
                goThrough(i, j - 1);
            }
            if (j + 1 < image[0].length) {
                goThrough(i, j + 1);
            }
        }
    }
    goThrough(sr, sc);
    return image;
};
