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
var maxDepth = function(root) {
    let max = 0;
    function goThrough(node, depth) {
        depth++;
        if (depth > max) {
            max = depth;
        }
        if (node.left) {
            goThrough(node.left, depth);
        }
        if (node.right) {
            goThrough(node.right, depth);
        }
    }
    if (root) {
        goThrough(root, 0);
        return max;
    } else {
        return 0;
    }
};
