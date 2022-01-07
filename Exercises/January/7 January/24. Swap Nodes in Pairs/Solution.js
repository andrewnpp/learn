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
var swapPairs = function(head) {
    if (!head) {
        return null;
    }
    let arrOdd = [];
    let arrEven = [];
    let count = 0;
    function goThrough(node) {
        count % 2 === 0 ? arrOdd.push(node.val) : arrEven.push(node.val);
        count++;
        if (node.next) {
            goThrough(node.next);
        }
    }
    goThrough(head);
    let newList = new ListNode();
    let pointer = newList;
    let flagEven = true;
    while (arrOdd.length || arrEven.length) {
        let arr = flagEven && arrEven.length ? arrEven : arrOdd;
        flagEven = !flagEven;
        pointer.val = arr.shift();
        if (arrOdd.length || arrEven.lenght) {
            pointer.next = new ListNode();
            pointer = pointer.next;
        }
    }
    return newList;
};
