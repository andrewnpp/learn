/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = null;
    let node = head;
    let newHead = head;
    while(node) {
        if (node.val === val) {
            if (node === newHead) {
                newHead = newHead.next;
            } else {
                prev.next = node.next;
            }
        } else {
            prev = node;
        }
        node = node.next;
    }
    return newHead;
};
