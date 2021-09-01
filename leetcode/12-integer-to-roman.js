/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    let romans = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    
    const romanKeys = Object.keys(romans).reverse();

    function getRoman(value) {
        for (let romanKey of romanKeys) {
            if (value >= romanKey) {
                return romanKey;
            }
        }
    }
    
    let out = '';
    num = num.toString().split('');
    
    
    for (let i = num.length - 1; i >= 0; i--) {
        let currentNum = num[i] * Math.pow(10, Math.abs(i- (num.length - 1)));
        let currentRoman = '';
        while (currentNum) {
            let romanKey = getRoman(currentNum);
            currentRoman += romans[romanKey];
            currentNum -= romanKey;
        }
        
        out = currentRoman + out;
    }
    
    
    return out;
};
