/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    
    let out = []
    let stack = [root];
    
    if (!root) {
       return out; 
    }
    
    while (stack.length) {
        let currentNode = stack.pop();
        out.push(currentNode.val);
        
        if (currentNode.right) {
            stack.push(currentNode.right)
        }
        
        if (currentNode.left) {
            stack.push(currentNode.left)
        }
    }
    
    return out;
    
};
