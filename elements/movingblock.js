// Moving Block
function MovingBlock(top, left, width, height, color, movementX, movementY){
  this.x = top;
  this.y = left;
  this.width = width;
  this.height = height;
  this.color = color;
  this.movementX = movementX;
  this.movementY = movementY;
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
  	  // Moving 
  	  this.x += (t * this.movementX);
  	  this.y += (t * this.movementY);

  	  if(this.x < 0 + ballRadius*2 || this.x > canvasWidth - this.width - ballRadius*2){
  	  	this.movementX = -this.movementX;
  	  }
  	  if(this.y < 0 || this.y > canvasHeight - this.height - padHeight - padBottom){
  	  	this.movementY = -this.movementY;
  	  }
      
       //Prevents all bricks in Y axis from being destroyed
        if (x > this.x - ballRadius && x < this.x + this.width + ballRadius && y > this.y - ballRadius && y < this.y + this.height + ballRadius) {
            
            //Collision from right to left
            if (dx < 0 && x >= (this.x + this.width - 20) && x <= this.x + this.width) {
                dx = -dx;
            }
            
            //Collision from left to right
            else if (dx > 0 && x <= (this.x + this.width/4)) {
                dx = -dx;
            }
            
            //Middle of the brick
            else {
                dy = -dy;
            }
        }
    }
}

