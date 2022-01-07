/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let arr = [];
    let count = 0;
    let tempArr = [];
    function goThrough(node) {
        tempArr.push(node.val);
        if (tempArr.length % k === 0) {
            arr.push(...tempArr.reverse());
            tempArr = [];
        }
        if (node.next) {
            goThrough(node.next);
        }
    }
    goThrough(head);
    arr.push(...tempArr);
    let newList = new ListNode();
    let pointer = newList;
    while (arr.length) {
        pointer.val = arr.shift();
        if (arr.length) {
            pointer.next = new ListNode();
            pointer = pointer.next;
        }
    }
    return newList;
};
