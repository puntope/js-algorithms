/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let res = 0;
    
    let romanMap = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'VI': 6,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    
    while (s.length) {
        if (romanMap[`${s[0]}${s[1]}`]) {
            res += romanMap[`${s[0]}${s[1]}`];
            s = s.substring(2);
        } else {
            res += romanMap[`${s[0]}`];
            s = s.substring(1);
        }
    }
    
    return res;
};
