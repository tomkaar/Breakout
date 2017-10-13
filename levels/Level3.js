var Level3 = new Level3();

function Level3() {
  
  tc = 0;
  cc = 0;
  let levelBricks = [];
  let brickTemp;

brickTemp = new Brick(tile.row(0), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(1), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(2), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(4), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(5), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(6), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(8), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(9), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(10), tile.column(0), brickWidth, brickHeight, "red", 10);
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(2), tile.column(2), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(3), tile.column(2), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(4), tile.column(2), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(6), tile.column(2), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(7), tile.column(2), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(8), tile.column(2), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);


  this.draw = function() {
    for (var u in levelBricks) {
      levelBricks[u].draw();
    }
  }
}