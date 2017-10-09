var level2 = new level2();

function level2() {
  
  let levelBricks = [];
  let brickTemp;
  
  for(var i = 4; i < 7; i++) {
    brickTemp = new Brick(tile.row(i), tile.column(0), brickWidth, brickHeight, 'green', 10);
    levelBricks.push(brickTemp);
  }
  for (var i = 3; i < 8; i++) {
    brickTemp = new Brick(tile.row(i), tile.column(1), brickWidth, brickHeight, 'orange', 10);
    levelBricks.push(brickTemp);
  }
  for (var i = 2; i < 9; i++) {    
    brickTemp = new Brick(tile.row(i), tile.column(2), brickWidth, brickHeight, 'green', 10);
    levelBricks.push(brickTemp);
  }
  for (var i = 0; i < 11; i++) { 
    brickTemp = new Brick(tile.row(i), tile.column(3), brickWidth, brickHeight, 'orange', 10); 
    levelBricks.push(brickTemp); 
  }
  for (var i = 2; i < 9; i++) {    
    brickTemp = new Brick(tile.row(i), tile.column(4), brickWidth, brickHeight, 'green', 10);
    levelBricks.push(brickTemp);
  }
  for (var i = 3; i < 8; i++) {
    brickTemp = new Brick(tile.row(i), tile.column(5), brickWidth, brickHeight, 'orange', 10);
    levelBricks.push(brickTemp);
  }
  for(var i = 4; i < 7; i++) {
    brickTemp = new Brick(tile.row(i), tile.column(6), brickWidth, brickHeight, 'green', 10);
    levelBricks.push(brickTemp);
  }
  
  this.draw = function() {
    for (var u in levelBricks) {
      levelBricks[u].draw();
    }
  }
}