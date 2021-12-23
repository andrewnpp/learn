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
var findSecondMinimumValue = function(root) {
    let set = new Set();
    function goThrough(node) {
        set.add(node.val);
        if (node.left) {
            goThrough(node.left);
        }
        if (node.right) {
            goThrough(node.right);
        }
    }
    goThrough(root);
    let arr = [...set].sort((a, b) => a - b);
    return arr[1] || -1;
};
