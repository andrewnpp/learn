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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    function goThrough(node, path) {
        if (path) {
            path += '->';
        }
        path += `${node.val}`;
        if (!node.left && !node.right) {
            paths.push(path);
        } else {
            if (node.left) {
                goThrough(node.left, path);
            }
            if (node.right) {
                goThrough(node.right, path);
            }
        }
    }
    goThrough(root, '');
    return paths;
};
