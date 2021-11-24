/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function checkTrees(p1, p2) {
        if ((p1.val !== p2.val) || (p1.left && !p2.left) || (p1.right && !p2.right)) {
            result = false;
            return;
        }
        if (p1.left && p2.left) {
            checkTrees(p1.left, p2.left);
        } else if ((p1.left && !p2.left) || (!p1.left && p2.left)) {
            result = false;
            return;
        }
        if (p1.right && p2.right) {
            checkTrees(p1.right, p2.right);
        } else if ((p1.right && !p2.right) || (!p1.right && p2.right)) {
            result = false;
            return;
        }
    }
    if (!p && !q) {
        return true;
    } else if ((!p && q) || (p && !q)) {
        return false;
    }
    let result = true;
    checkTrees(p, q);
    return result;
};
