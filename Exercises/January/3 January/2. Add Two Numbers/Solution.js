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
var addTwoNumbers = function(l1, l2) {
    function goThrough(node, str) {
        str = node.val + str;
        if (node.next) {
            return goThrough(node.next, str);
        }
        return str;
    }
    let first = goThrough(l1, '');
    let second = goThrough(l2, '');
    let arr = [...(BigInt(first) + BigInt(second)).toString()];
    let pointer = new ListNode();
    let result = pointer;
    while (arr.length) {
        pointer.val = arr.pop();
        if (arr.length) {
            pointer.next = new ListNode();
        }
        pointer = pointer.next;
    }
    return result;
};
