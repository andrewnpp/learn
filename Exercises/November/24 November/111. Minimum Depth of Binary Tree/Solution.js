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
var minDepth = function(root) {
    let min = null;
    function goThrough(node, depth) {
        depth++;
        if (!node.left && !node.right) {
            if (min === null || depth < min) {
                min = depth;
            }
        } else {
            if (node.left) {
                goThrough(node.left, depth);
            }
            if (node.right) {
                goThrough(node.right, depth);
            }
        }
    }
    if (root) {
        goThrough(root, 0);
    } else {
        return 0;
    }
    return min;
};
