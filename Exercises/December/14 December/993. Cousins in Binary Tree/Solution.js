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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xDepth, xParent, yDepth, yParent;
    function goThrough(node, depth, parent = null) {
        depth++;
        if (node.val === x) {
            xDepth = depth;
            xParent = parent;
        } else if (node.val === y) {
            yDepth = depth;
            yParent = parent;
        }
        if (!xDepth || !yDepth) {
            if (node.left) {
                goThrough(node.left, depth, node);
            }
            if (node.right) {
                goThrough(node.right, depth, node);
            }
        }
    }
    goThrough(root, 0, null);
    return xDepth === yDepth && xParent !== yParent;
};
