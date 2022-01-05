/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodes = [];
    let size = 1;
    let pointer = head;
    while (pointer.next) {
        pointer = pointer.next;
        size++;
    }
    let nodeToDelete = size - n + 1;
    if (nodeToDelete === 1) {
        return head.next;
    } else {
        pointer = head;
        let temp = 1;
        while (temp !== nodeToDelete - 1) {
            pointer = pointer.next;
            temp++;
        }
        pointer.next = pointer.next?.next || null;
    }
    return head;
};
