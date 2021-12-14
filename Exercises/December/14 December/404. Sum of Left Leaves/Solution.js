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
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    function goThrough(node) {
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val;
            } else {
                goThrough(node.left);
            }
        }
        if (node.right) {
            goThrough(node.right);
        }
    }
    goThrough(root);
    return sum;
};
