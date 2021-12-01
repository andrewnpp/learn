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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let value = root.val;
    let result = true;
    function goThrough(node) {
        if (node.val !== value) {
            result = false;
        }
        if (node.left && result) {
            goThrough(node.left);
        }
        if (node.right && result) {
            goThrough(node.right);
        }
    }
    goThrough(root);
    return result;
};
