// If ball hits this block it'll be pushed. Can be used as obstacle.


function pushBlock(top, left, width, height, color){
  this.x = top;
  this.y = left;
  this.width = width;
  this.height = height;
  this.color = color;
  var placeho
  var pushActive = false;
  var placeholderX = this.x;
  var placeholderY = this.y;
  var brickShotY = dy;
  var brickShotX = dx; 
  
  this.draw = function(){
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    this.update();
    
    if (pushActive) {
      this.blockPush();
    }
  }

  this.update = function(){
      // Collision Detection
      if (collision(this.x, this.y, this.width, this.height)) {
        sideCollision(this.x, this.y, this.width, this.height);
        placeholderX = this.x;
        placeholderY = this.y;
        brickShotY = dy;
        brickShotX = dx; 
        pushActive = true;  
      }
  }
  
  this.blockPush = function() {
    this.x -= brickShotX;
    this.y -= brickShotY;
    
    if (brickShotY < 0) {
      brickShotY++;
      if (brickShotY >= 0) {
        brickShotY = 0;
      }
    }
    if (brickShotY > 0) {
      brickShotY--;
      if (brickShotY <= 0) {
        brickShotY = 0;
      }
    }
    if (brickShotX < 0) {
      brickShotX++;
      if (brickShotX >= 0) {
        brickShotX = 0;
      }
    }
    if (brickShotX > 0) {
      brickShotX--;
      if (brickShotX <= 0) {
        brickShotX = 0;
      }
    }
    
    if (brickShotX == 0 || brickShotY == 0) {
      brickShotX = 0;
      brickShotY = 0;
      pushActive = false;
    }
  }
}