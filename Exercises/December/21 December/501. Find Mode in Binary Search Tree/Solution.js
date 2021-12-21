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
var findMode = function(root) {
    let map = new Map();
    function goThrough(node) {
        map.set(node.val, (map.get(node.val) || 0) + 1);
        if (node.left) {
            goThrough(node.left);
        }
        if (node.right) {
            goThrough(node.right);
        }
    }
    goThrough(root);
    let max = Math.max(...map.values());
    return [...map].filter(([ , val]) => val === max).map(([key]) => key);
};
