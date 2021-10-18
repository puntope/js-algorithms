/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let dummy = new ListNode(0, head);
    let node = head;
    let indexToRemove = 0 - n;
    
    while (node !== null) {
        indexToRemove++;
        node = node.next;
    }
    
    node = dummy;

    
    for (let i = 0; i <= indexToRemove; i++) {
        if (i === indexToRemove) {
            node.next = node.next?.next;
        }
        
        node = node.next;
    }
        
        
    return dummy.next;    
    
};
