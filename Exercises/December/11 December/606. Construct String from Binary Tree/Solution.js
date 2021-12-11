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
 * @return {string}
 */
var tree2str = function(root) {
    let result = '';
    function goThrough(node) {
        result += node.val;
        if (node.left || node.right) {
            result += '(';
            if (node.left) {
                goThrough(node.left);
            }
            result += ')';
            if (node.right) {
                result += '(';
                goThrough(node.right);
                result += ')';
            }
        }
    }
    goThrough(root);
    return result;
};
