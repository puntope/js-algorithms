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
   let plusOne = 0;
   let out; 
    
   function addOut(linked, num) {
       if (linked.next) {
           linked.next = addOut(linked.next, num)
       } else {
           linked.next = new ListNode(num);
       }
    
       return linked;
   }
    
   while (l1 || l2) {
       let curr = (l1?.val || 0) + (l2?.val || 0) + plusOne;

       plusOne = 0;
       if (curr >= 10) {
           curr -= 10;
           plusOne = 1;
       }  
              
       if (!out) {
           out = new ListNode(curr)
       } else {
           out = addOut(out, curr)
       }
       
       
       if (l1) {
        l1 = l1.next;
       }
       
       if (l2) {
        l2 = l2.next;
       }
   }
    
    if (plusOne) {
        out = addOut(out, 1)
    }
    
    return out;
};
