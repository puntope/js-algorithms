/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const maxInt = 2147483647;
    x = String(x)
    x = x.split('');
    const isNegative = x[0] === '-';
    if (isNegative) {
        x.splice(0,1);
    }
    for (let i = 0; i < x.length/2;i++) {
        let tmp = x[i];
        x[i] = x[x.length-i-1]; 
        x[x.length-i-1] = tmp;
    }
    
    if (isNegative) {
        x.unshift('-');
    }
    
    x = parseInt(x.join(''));
    
    if (x < -maxInt || x >= maxInt) {
        return 0
    }
    
    return x
};
