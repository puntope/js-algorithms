/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
    let pointer = 0;
    let hash = {};
    let longest = 0;
    let current = 0;
    
    while (pointer < s.length) {
        let letter = s[pointer];
        if (hash[letter] !== undefined) {    
           
            if (current > longest) {
                longest = current;
            }
            
            current = 0;
            pointer = hash[letter];
            hash = {}
        } else {
            hash[letter] = pointer;
            current++;
        }
        
        
        pointer++;
    }
    
    return current > longest ? current : longest;
};
