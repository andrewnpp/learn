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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    function rangeSum(root) {
        let condition = root.val >= low && root.val <= high;
        if (condition) {
            sum += root.val;
        }
        if (condition && root.right || root.val < low && root.right) {
            rangeSum(root.right);
        }
        if (condition && root.left || root.val > high && root.left) {
            rangeSum(root.left);
        }
    }
    rangeSum(root)
    return sum;
};
