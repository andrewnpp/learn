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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let arr = [];
    function goThrough(node) {
        if (node.left) {
            goThrough(node.left);
        }
        arr.push(node.val);
        if (node.right) {
            goThrough(node.right);
        }
    }
    goThrough(root);
    let newRoot = new TreeNode(arr[0], null, null);
    let pointer = newRoot;
    for (let i = 1; i < arr.length; i++) {
        pointer.right = new TreeNode(arr[i], null, null);
        pointer = pointer.right;
    }
    return newRoot;
};
