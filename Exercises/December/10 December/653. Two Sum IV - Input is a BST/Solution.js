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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
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
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(k - arr[i]) && i !== arr.lastIndexOf(k - arr[i])) {
            return true;
        }
    }
    return false;
};
