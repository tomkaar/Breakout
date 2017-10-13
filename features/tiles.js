// function is supposed to automatically assign a brick to a space in a symmetrical manner. 
// One can technically put a brick anywhere and even outside of the game but for consistency I will limit rows to 11 and columns to 10.

var tile = new tiles();

function tiles() {
  
  
  this.row = function(sum) {
    if (sum > brickRow || sum < 0) sum = brickRow;
    return (sum * (brickWidth + brickPaddingX)) + 20; 
  }
  
  this.column = function(sum) {
    if (sum > brickCol || sum < 0) sum = brickCol;
    return (sum * (brickHeight + brickPaddingY)) + 20; 
  }
   
}