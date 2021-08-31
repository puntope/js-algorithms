/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    let str = new String(x)
    
    for (let i = 0; i < str.length; i++) {
        let left = str[i];
        let right = str[str.length-i-1];
        
        if (left !== right) {
            return false
        }
    }
    
    return true;
};
