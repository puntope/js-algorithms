/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longest = '';
    let prefix = '';
    if (!strs.length) return longest;
    
    for (let i = 0; i < strs[0].length; i++) {
        prefix += strs[0][i];
        let match = true;
        for (let j = 1; j < strs.length; j++) {
           match = false;
           if (strs[j].slice(0,i+1) === prefix) {
               match = true;
           } else {
               break;
           }
        }  
        
        if (match) {
           longest = prefix; 
        }
    }
    
    return longest;
};
