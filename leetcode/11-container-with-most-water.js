/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  
    
    
    let max = 0;
    
    while (height.length >= 2) {
        let min = Math.min(height[0], height[height.length - 1]);
        let area = min * (height.length - 1);
        
        if (area >= max) {
            max = area;   
        }
        
        if (height[0] < height[height.length - 1]) {
            height.shift();
        } else {
            height.pop();
        }
    }

    
    return max;
};
