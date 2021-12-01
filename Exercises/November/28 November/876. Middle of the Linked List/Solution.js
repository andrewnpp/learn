/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = [];
    function goThrough(node) {
        if (node) {
            arr.push(node);
            goThrough(node.next);
        }
    }
    goThrough(head);
    return arr[Math.trunc(arr.length / 2)];
};
