/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let valStr = '';
    let pointer = head;
    while (pointer !== null) {
        valStr += pointer.val;
        pointer = pointer.next;
    }
    return parseInt(valStr, 2);
};
