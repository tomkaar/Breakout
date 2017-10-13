var Level3 = new Level3();

function Level3() {
  
  tc = 0;
  cc = 0;
  let levelBricks = [];
  let brickTemp;

brickTemp = new Brick(tile.row(3), tile.column(0), brickWidth, brickHeight, "gold", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(4), tile.column(0), brickWidth, brickHeight, "gold", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(5), tile.column(0), brickWidth, brickHeight, "gold", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(7), tile.column(0), brickWidth, brickHeight, "gold", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(8), tile.column(0), brickWidth, brickHeight, "gold", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(9), tile.column(0), brickWidth, brickHeight, "gold", 10);
levelBricks.push(brickTemp);
brickTemp = new Brick(tile.row(1), tile.column(1), brickWidth, brickHeight, "orangered", 10000);
levelBricks.push(brickTemp);
brickTemp = new MovingBlock(tile.row(1), tile.column(2), brickWidth, brickHeight, "grey", 1, 0, 0);
levelBricks.push(brickTemp);
brickTemp = new MovingBlock(tile.row(9), tile.column(3), brickWidth, brickHeight, "grey", 1, 0, 0);
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(2), tile.column(4), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(3), tile.column(4), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);
brickTemp = new Block(tile.row(8), tile.column(4), brickWidth, brickHeight, "grey");
levelBricks.push(brickTemp);


  this.draw = function() {
    for (var u in levelBricks) {
      levelBricks[u].draw();
    }
  }
}