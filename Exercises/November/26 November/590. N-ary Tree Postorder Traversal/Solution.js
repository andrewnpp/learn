/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let arr = [];
    if (!root) {
        return arr;
    }
    function goThrough(node) {
        if (node.children) {
            for (let child of node.children) {
                goThrough(child);
            }
        }
        arr.push(node.val);
    }
    goThrough(root);
    return arr;
};
