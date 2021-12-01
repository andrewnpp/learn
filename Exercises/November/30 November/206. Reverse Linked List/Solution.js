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
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    let arr = [];
    function goThrough(node) {
        arr.push(node.val);
        if (node.next) {
            goThrough(node.next);
        }
    }
    goThrough(head);
    let newHead = new ListNode();
    let pointer = newHead;
    while (arr.length) {
        pointer.val = arr.pop();
        if (arr.length) {
            pointer.next = new ListNode();
            pointer = pointer.next;
        }
    }
    return newHead;
};
