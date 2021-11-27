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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let result = null;
    function goThrough(node) {
        if (node.val === val) {
            result = node;
            return;
        }
        if (val < node.val && node.left) {
            goThrough(node.left);
        } else if (val >= node.val && node.right) {
            goThrough(node.right);
        }
    }
    goThrough(root);
    return result;
};
