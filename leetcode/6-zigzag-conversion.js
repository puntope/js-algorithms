/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let row = 0; 
    let col = 0;
    let isZig = true;
    let matrix = [];
    let arrS = s.split('');
    let out = '';
    
    if (numRows === 1) {
        return s
    }
    
    while (arrS.length) {
        let letter = arrS.shift();
        
        if (row === numRows) {
            isZig = false;
            col++;
            row = numRows - 2;
        }
        
        if (row === 0 && !isZig) {
            isZig = true;
        }
                
        
        if (matrix[row] == undefined) {
            matrix[row] = [];
        }
        
        matrix[row][col] = letter
        
        if (isZig) {
            row++;
        } else {
            row--
            col++;
        }
        
    }
    
    for (let row of matrix) {
        out += row.join('');
    }
    
    
    return out;
    
};
