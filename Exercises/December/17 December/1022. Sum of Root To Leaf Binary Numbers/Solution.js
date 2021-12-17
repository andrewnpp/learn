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
var sumRootToLeaf = function(root) {
    let sum = 0;
    function goThrough(node, str) {
        str += `${node.val}`;
        if (!node.left && !node.right) {
            sum += parseInt(str, 2);
        } else {
            if (node.left) {
                goThrough(node.left, str);
            }
            if (node.right) {
                goThrough(node.right, str);
            }
        }
    }
    goThrough(root, '');
    return sum;
};
