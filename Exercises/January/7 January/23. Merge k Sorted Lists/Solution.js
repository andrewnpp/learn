/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function goThrough(node) {
        arr.push(node.val);
        if (node.next) {
            goThrough(node.next);
        }
    }
    let arr = [];
    for (let list of lists) {
        if (list) {
            goThrough(list);
        }
    }
    if (!arr.length) {
        return null;
    }
    arr.sort((a, b) => b - a);
    let newList = new ListNode();
    let pointer = newList;
    while (arr.length) {
        pointer.val = arr.pop();
        if (arr.length) {
            pointer.next = new ListNode();
            pointer = pointer.next;
        }
    }
    return newList;
};
