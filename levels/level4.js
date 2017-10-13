var level4 = new level4();

function level4() {
  
  tc = 0;
  cc = 0;
  let levelBricks = [];
  let brickTemp;

brickTemp = new Brick(tile.row(0), tile.column(1), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(3), tile.column(1), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(7), tile.column(1), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(10), tile.column(1), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(2), tile.column(2), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(4), tile.column(2), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(6), tile.column(2), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(8), tile.column(2), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(0), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(2), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(3), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(4), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(5), tile.column(3), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(6), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(7), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(8), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(10), tile.column(3), brickWidth, brickHeight, "red");
levelBricks.push(brickTemp);


  this.draw = function() {
    for (var u in levelBricks) {
      levelBricks[u].draw();
    }
  }
}