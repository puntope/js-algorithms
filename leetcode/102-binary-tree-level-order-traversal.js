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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let out = [];
    
    if (!root) return out;
    
    out.push([root.val]);
    
    traverse(root, 1)
    
    function traverse(node, i) {
        
        if (!node) return;
        let level = [];
        
        if (node.left) {
            level.push(node.left.val);
        }
        
        if (node.right) {
            level.push(node.right.val); 
        }
        
        if (level.length) {
            out[i] = out[i] ? [...out[i], ...level] : level;
        }
      
        traverse(node.left, i + 1);
        traverse(node.right, i + 1);
        
    }
   
    
    
    return out;
};
