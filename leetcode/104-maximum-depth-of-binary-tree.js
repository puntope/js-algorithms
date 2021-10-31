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
var maxDepth = function(root) {
    let max = 0;
    
    traverse(root, 1); 
    
    function traverse(node, level) {
        if (!node) return;
        max = Math.max(level, max);
        
        if (node.left) {
            traverse(node.left, level+1);
        }
        
        if (node.right) {
            traverse(node.right, level+1);
        }
    }
    
    return max;
};
