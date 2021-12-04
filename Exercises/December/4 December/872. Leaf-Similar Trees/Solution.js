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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function goThrough(node, arr) {
        if (!node.left && !node.right) {
            arr.push(node.val);
        }
        if (node.left) {
            goThrough(node.left, arr);
        }
        if (node.right) {
            goThrough(node.right, arr)
        }
    }
    let arr1 = [];
    goThrough(root1, arr1);
    let arr2 = [];
    goThrough(root2, arr2);
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};
