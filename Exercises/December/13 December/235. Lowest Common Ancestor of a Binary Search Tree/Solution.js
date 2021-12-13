/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lesser = Math.min(p.val, q.val);
    let bigger = Math.max(p.val, q.val);
    let result;
    let flag = true;
    function goThrough(node) {
        if (flag) {
            if (lesser <= node.val && bigger >= node.val) {
                result = node;
                flag = false;
            } else if (lesser < node.val && bigger < node.val) {
                goThrough(node.left);
            } else if (lesser > node.val && bigger > node.val) {
                goThrough(node.right);
            }
        }
    }
    goThrough(root);
    return result;
};
