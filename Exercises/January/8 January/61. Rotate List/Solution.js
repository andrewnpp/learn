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
var rotateRight = function(head, k) {
    if (!head) {
        return null;
    }
    let arr = [];
    function goThrough(node) {
        arr.push(node.val);
        if (node.next) {
            goThrough(node.next);
        }
    }
    goThrough(head);
    let moves = k % arr.length;
    while (moves) {
        arr.unshift(arr.pop());
        moves--;
    }
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
