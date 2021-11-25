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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let arr = [];
    function goThrough(node) {
        if (node.left) {
            goThrough(node.left);
        }
        if (node.right) {
            goThrough(node.right);
        }
        arr.push(node.val);
    }
    if (root) {
        goThrough(root);
    }
    return arr;
};
