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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let levelsMap = new Map();
    function goThrough(node, depth) {
        depth++;
        if (levelsMap.has(depth)) {
            levelsMap.get(depth).push(node.val);
        } else {
            levelsMap.set(depth, [node.val]);
        }
        if (node.left) {
            goThrough(node.left, depth);
        }
        if (node.right) {
            goThrough(node.right, depth);
        }
    }
    goThrough(root, 0);
    return [...levelsMap.values()].map((level) => level.reduce((prev, item) => prev + item, 0) / level.length);
};
