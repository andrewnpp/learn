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
var bstToGst = function(root) {
    let uniqueValues = new Set();
    function goThrough(root) {
        uniqueValues.add(root.val);
        if (root.left) goThrough(root.left);
        if (root.right) goThrough(root.right);
    }
    goThrough(root);
    let arr = [...uniqueValues].sort((a, b) => a - b);
    let sum = arr.reduce((prev, item) => prev + item, 0);
    let sumMap = new Map(arr.map((item) => [item, sum -= item]));
    function sumThrough(root) {
        root.val += sumMap.get(root.val);
        if (root.left) sumThrough(root.left);
        if (root.right) sumThrough(root.right);
    }
    sumThrough(root);
    return root;
};
