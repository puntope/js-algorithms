/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = {}
    let lastSubstr = '';
    let biggest = lastSubstr;
    for (let j = 0; j < s.length; j++) {
        if ( hash[s[j]] != undefined) {
            j = hash[s[j]];
            hash = {};
            lastSubstr = '';
            continue;
        }
        
        hash[s[j]] = j;
        lastSubstr += s[j];
        if (lastSubstr.length > biggest.length) {
            biggest = lastSubstr;
        }
    }
    
    return biggest.length;
};
