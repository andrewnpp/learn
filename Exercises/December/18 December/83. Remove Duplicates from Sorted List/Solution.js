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
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    let set = new Set();
    function goThrough(node) {
        set.add(node.val);
        if (node.next) {
            goThrough(node.next);
        }
    }
    goThrough(head);
    let pointer = new ListNode();
    let result = pointer;
    let arr = [...set].reverse();
    while (arr.length) {
        pointer.val = arr.pop();
        if (arr.length) {
            pointer.next = new ListNode();
        }
        pointer = pointer.next;
    }
    return result;
};
