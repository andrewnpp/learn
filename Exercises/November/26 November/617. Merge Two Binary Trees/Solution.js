/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1 || !root2) {
        return root1 || root2;
    }
    let head = new TreeNode();
    function goThrough(node1, node2, result) {
        if (node1 && node2) {
            result.val = node1.val + node2.val;
        } else {
            result.val = (node1?.val || node2?.val) || 0;
        }
        if (node1?.left || node2?.left) {
            result.left = new TreeNode();
            goThrough(node1?.left, node2?.left, result.left);
        }
        if (node1?.right || node2?.right) {
            result.right = new TreeNode();
            goThrough(node1?.right, node2?.right, result.right);
        }
    }
    goThrough(root1, root2, head);
    return head;
};
