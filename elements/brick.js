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
      
      if (x > this.x - ballRadius && x < this.x + this.width + ballRadius && y > this.y - ballRadius && y < this.y + this.height + ballRadius) {
            
            //Collision from right to left
            if (dx < 0 && x >= (this.x + this.width - 20) && x <= this.x + this.width) {
                dx = -dx;
                shake.small();
                this.status = false;
            }
            
            //Collision from left to right
            else if (dx > 0 && x <= (this.x + this.width/4)) {
                dx = -dx;
                shake.small();
                this.status = false;
            }
            
            //Middle of the brick
            else {
                dy = -dy;
                shake.small();
                this.status = false;
            }
        }
  }
}