/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let arr = [];
    function goThrough(node) {
        if (node.left) {
            goThrough(node.left);
        }
        arr.push(node.val);
        if (node.right) {
            goThrough(node.right);
        }
    }
    goThrough(root);
    let min = null;
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i] - arr[i - 1];
        if (min === null || temp < min) {
            min = temp;
        }
    }
    return min;
};
