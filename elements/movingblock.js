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
  	  this.x += this.movementX;
  	  this.y += this.movementY;

  	  if(this.x < 0 || this.x > canvasWidth - this.width){
  	  	this.movementX = -this.movementX;
  	  }
  	  if(this.y < 0 || this.y > canvasHeight - this.height - padHeight - padBottom){
  	  	this.movementY = -this.movementY;
  	  }


      // Collision Detection
      var distX = Math.abs(x - this.x-this.width/2);
      var distY = Math.abs(y - this.y-this.height/2);

      if (distX > (this.width/2 + ballRadius)) { return false; }
      if (distY > (this.height/2 + ballRadius)) { return false; }

      if (distX <= (this.width/2)) { 
        dy = -dy;
      } 
      if (distY <= (this.height/2)) { 
        dx = -dx;
      }
  }
}