var level1 = new level1();

function level1() {
  
  let level1Bricks = [];
  let brickTemp;
  
  for(var i = 0; i < 11; i++) {
    brickTemp = new Brick(tile.row(i), tile.column(0), brickWidth, brickHeight, 'red', 10);
    level1Bricks.push(brickTemp);
  }
  for (var i = 1; i < 10; i++) {
    brickTemp = new Brick(tile.row(i), tile.column(1), brickWidth, brickHeight, 'cyan', 10);
    level1Bricks.push(brickTemp);
  }
  for (var i = 2; i < 9; i++) {    
    brickTemp = new Brick(tile.row(i), tile.column(2), brickWidth, brickHeight, 'red', 10);
    level1Bricks.push(brickTemp);
  }
  for (var i = 3; i < 8; i++) { 
    brickTemp = new Brick(tile.row(i), tile.column(3), brickWidth, brickHeight, 'cyan', 10); 
    level1Bricks.push(brickTemp); 
  }
  
  this.draw = function() {
    for (var u in level1Bricks) {
      level1Bricks[u].draw();
    }
  }
}