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
var deepestLeavesSum = function(root) {
    let depth = 0;
    let depthMap = new Map();
    function maxDepth(root, tempDepth) {
        tempDepth++;
        if (!depthMap.has(tempDepth)) {
            depthMap.set(tempDepth, []);
        }
        depthMap.get(tempDepth).push(root.val);
        if (!root.left && !root.right && tempDepth > depth) {
            depth = tempDepth;
        }
        if (root.left) {
            maxDepth(root.left, tempDepth)
        }
        if (root.right) {
            maxDepth(root.right, tempDepth)
        }
    }
    maxDepth(root, 0);
    return depthMap.get(depth).reduce((prev, item) => prev + item, 0);
};
