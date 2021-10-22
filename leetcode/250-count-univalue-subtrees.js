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
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    let subtrees = 0
    
    if (!root) {
       return subtrees;
    }
    
    
    iterate(root, root.val);
    
    function iterate(node, val) {
        let leftVal = true;
        let rightVal = true;
        
        if (node.left) {
            leftVal = iterate(node.left, node.val)
        }
        
        if (node.right) {
            rightVal = iterate(node.right, node.val)
        }
        
       if (leftVal && rightVal) {
            subtrees++;
            return val === node.val
        }
    
    }
    
    
    return subtrees;
};
