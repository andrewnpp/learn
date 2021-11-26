/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let arr = [];
    if (!root) {
        return arr;
    }
    function goThrough(node) {
        arr.push(node.val);
        if (node.children) {
            for (let child of node.children) {
                goThrough(child);
            }
        }
    }
    goThrough(root);
    return arr;
};
