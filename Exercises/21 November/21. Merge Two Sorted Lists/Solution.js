/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    let merged = new ListNode();
    let mergedHead = merged;
    while (l1 || l2) {
        if (l1 && (!l2 || l1.val <= l2.val)) {
            merged.val = l1.val;
            l1 = l1.next;
        } else if (l2 && (!l1 || l1.val > l2.val)) {
            merged.val = l2.val;
            l2 = l2.next;
        }
        if (l1 || l2) {
            merged.next = new ListNode();
            merged = merged.next;
        }
    }
    return mergedHead;
};
