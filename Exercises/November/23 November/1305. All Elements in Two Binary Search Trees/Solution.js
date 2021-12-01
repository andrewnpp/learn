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
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let arr1 = [];
    let arr2 = [];
    function goThrough(node, arr) {
        if (node) {
            if (node.left) {
                goThrough(node.left, arr);
            }
            arr.push(node.val);
            if (node.right) {
                goThrough(node.right, arr);
            }
        }
    }
    goThrough(root1, arr1);
    goThrough(root2, arr2);
    return [...arr1, ...arr2].sort((a, b) => a - b);
};
