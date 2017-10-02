// Brick
function Brick(top, left, width, height, color, score){
  this.x = top;
  this.y = left;
  this.width = width;
  this.height = height;
  this.color = color;
  this.score = score;
  this.status = true;

  this.draw = function(){
    if(this.status){
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      this.update();
    }
  }

  this.update = function(){
      // Collision Detection
      var distX = Math.abs(x - this.x-this.width/2);
      var distY = Math.abs(y - this.y-this.height/2);

      if (distX > (this.width/2 + ballRadius)) { return false; }
      if (distY > (this.height/2 + ballRadius)) { return false; }

      if (distX <= (this.width/2)) { 
        dy = -dy;
        addScore(this.score);
        this.status = false;
      } 
      if (distY <= (this.height/2)) { 
        dx = -dx;
        addScore(this.score);
        this.status = false;
      }
  }
}