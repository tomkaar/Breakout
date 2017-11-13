// BaseBlock class
function BaseBlock(x, y, width, height, color, lives) {
	this.width = width;
	this.height = height;
	this.x = (x * (brickWidth + brickPaddingX)) + 20;  // Tiles function has been implemented into BaseBlock
	this.y = (y * (brickHeight + brickPaddingX)) + 20; // x and y functions on a gridbase now. row = 0 - 10, column = 0 - 9
	this.color = color;
	this.lives = lives;

	this.status = true;
	this.hitConfirm = false;
	this.brickKilled = false;

	// Variables related to death animation
	var grav = 1.1;
  var gravTime = 14;  // higher number = higher bounce when killed
  

	this.draw = function() {
		if(this.status) {
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();

      // Makes sure that collision is turned off during death animation
      if (this.brickKilled) {
      	this.dieAnim();
      }
      else {
      	this.update();
      }
    }  
	}

	this.update = function() {
		this.hitConfirm = false;
		if (collision(this.x, this.y, this.width, this.height)) {
    	sideCollision(this.x, this.y, this.width, this.height);
    
      shake.small();  
      sound.explosionSmall();
      this.hitConfirm = true;   
    }
	}

	// small "bounce" animation that plays when brick is destroyed
	this.dieAnim = function() {
    if (this.y < canvasHeight) {
      gravTime--; // gravity time. 
      let brickshotX = ball.dx; //placeholder variable
      this.x += brickshotX; // shoots the brick towards the same way the ball was moving
      this.y = Math.floor(this.y - (gravTime * grav)); // Algorithm that creates the arc
    }
    else {
      this.status = false; // Stop drawing bricks when 
    }
  }
}





function Brick(x, y, width, height, color, lives) {
	this.prototype = new BaseBlock(x, y, width, height, color, lives);

	let brick = this.prototype;

	this.draw = function() {
		brick.draw();
		if (brick.hitConfirm) {
			brick.lives--;
			if (brick.lives == 0) {
				brick.brickKilled = true;
			}
		}
	}	
}			

// Create a moving block by making a new object = new BrickMoving(starting X, starting Y, end X, end Y, etc..., speed of movement)
// Because of how it currently works the starting X and Y need to be a lower value than ending X or Y.
function BrickMoving(x, y, endX, endY, width, height, color, lives, speed) {
	this.prototype = new BaseBlock(x, y, width, height, color, lives);
	let brick = this.prototype;

	// Startposition of move
	this.startX = (x * (brickWidth + brickPaddingX)) + 20;
	this.startY = (y * (brickHeight + brickPaddingX)) + 20;
	// End position of move.
	this.endX = (endX * (brickWidth + brickPaddingX)) + 20;
	this.endY = (endY * (brickHeight + brickPaddingX)) + 20;


	this.speedX = speed;
	this.speedY = speed;

	this.draw = function() {
		brick.draw();
		this.update();
		if (brick.hitConfirm) {
			brick.lives--;
			if (brick.lives == 0) {
				brick.brickKilled = true;
			}
		}
	}	

	this.update = function() {
		if (this.startX != this.endX) {
  	 	brick.x += (t * this.speedX);
  	 }
  	
  	if (this.startY != this.endY) {
  	 	brick.y += (t * this.speedY);
  	}

  	if(brick.x < this.startX || brick.x > this.endX){
  	 	this.speedX = -this.speedX;
  	}
    
  	if(brick.y < this.startY || brick.y > this.endY){
  		this.speedY = -this.speedY;
  	}	
	}
}
