/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    function goThrough(node, depth) {
        depth++;
        if (depth > max) {
            max = depth;
        }
        if (node.children) {
            for (let child of node.children) {
                goThrough(child, depth);
            }
        }
    }
    if (root) {
        goThrough(root, 0);
    }
    return max;
};
