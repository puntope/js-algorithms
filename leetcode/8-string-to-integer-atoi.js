/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let multiplier = 0;
    let out = '';
    
    
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    
    for (let i = 0; i < s.length; i++) {
        if (!out && !multiplier && (s[i] == '-' || s[i] == '+')) {
            multiplier = s[i] === '-' ? -1 : 1;
        } else if (!out && !multiplier && s[i] === ' ') {
            continue;
        } else if (isNaN(s[i]) || s[i] === ' ') {
            break;         
        } else {
            out += s[i];
        }
    }
    
    if (!multiplier) {
        multiplier = 1;
    }
    
    out *= multiplier;
    return clamp(out, -Math.pow(2, 31),Math.pow(2, 31)-1)
};
