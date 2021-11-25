/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr1 = [];
    let pointer = head;
    while (pointer) {
        arr1.push(pointer.val);
        pointer = pointer.next;
    }
    if (arr1.length === 1) {
        return true;
    }
    let arr2 = [];
    if (arr1.length % 2 === 0) {
        arr2 = arr1.splice(arr1.length / 2);
    } else {
        arr2 = arr1.splice(Math.ceil(arr1.length / 2));
        arr1.pop();
    }
    return arr1.join() === arr2.reverse().join();
};
