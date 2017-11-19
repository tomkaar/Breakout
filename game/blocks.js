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




function Block(x, y, width, height, color) {
	this.prototype = new BaseBlock(x, y, width, height, color, 1);

	let brick = this.prototype;

	this.draw = function() {
		brick.draw();
	}	
}			




function BrickMoving(pathX, pathY, color, lives, speed) {
	this.prototype = new BaseBlock(pathX[0], pathY[0], brickWidth, brickHeight, color, lives);
	let brick = this.prototype;

	this.pathX = [];
	this.pathY = [];
	this.speed = speed;

	var updateLoop = 0;
	var updateReverse = false;

	// Startposition of move. Calculates the actual coordinates from the tile-based numbers from the inparameters.
	for (let i = 0; i < pathX.length; i++) {
		this.pathX[i] = (pathX[i] * (brickWidth + brickPaddingX)) + 20;
	}
	for (let i = 0; i < pathY.length; i++) {
		this.pathY[i] = (pathY[i] * (brickHeight + brickPaddingX)) + 20;
	}

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

		if (!updateReverse) { //Initial movement. If updateReverse isn't false.
			if(brick.x != this.pathX[updateLoop+1]) {  // if the x position isn't already at the next x position in the array
				if (brick.x < this.pathX[updateLoop+1]) { // if the next position is a higher value than the current: add to x.
					brick.x += this.speed;
				}
				if (brick.x > this.pathX[updateLoop+1]) { // if the next position is a lower value than current: subtract from x
					brick.x -= this.speed;
				}
			}

			// Below code applies the same calculations to the y-axis
			if(brick.y != this.pathY[updateLoop+1]) {
				if (brick.y < this.pathY[updateLoop+1]) {
					brick.y += this.speed;
				}
				if (brick.y > this.pathY[updateLoop+1]) {
					brick.y -= this.speed;
				}
			}

			// if bricks x-position and y-position both equal their next positions: update to the next position in the array.
			if ((brick.x < this.pathX[updateLoop+1]+3 && brick.x > this.pathX[updateLoop+1]-3) 
				&& (brick.y < this.pathY[updateLoop+1]+3 && brick.y > this.pathY[updateLoop+1]-3)) {				
				updateLoop++;

				// if the current update loop reaches the same position as the last value in both arrays
				if ((updateLoop == this.pathX.length-1) && (updateLoop == this.pathY.length-1)){
					// If neither x or y arrays end with the same position they start in: Reverse the animation. Otherwise it will loop.
					if ((this.pathX[0] == this.pathX[updateLoop]) && (this.pathY[0] == this.pathY[updateLoop])) {
						updateLoop = 0;
					}
					else {
						updateReverse = true;
					}
				}
			}
		}

		// All of the above but in reverse.
		if (updateReverse) { //Initial movement. If updateReverse isn't false.
			if(brick.x != this.pathX[updateLoop-1]) {  // if the x position isn't already at the next x position in the array
				if (brick.x < this.pathX[updateLoop-1]) { // if the next position is a higher value than the current: add to x.
					brick.x += this.speed;
				}
				if (brick.x > this.pathX[updateLoop-1]) { // if the next position is a lower value than current: subtract from x
					brick.x -= this.speed;
				}
			}

			// Below code applies the same calculations to the y-axis
			if(brick.y != this.pathY[updateLoop-1]) {
				if (brick.y < this.pathY[updateLoop-1]) {
					brick.y += this.speed;
				}
				if (brick.y > this.pathY[updateLoop-1]) {
					brick.y -= this.speed;
				}
			}

			// if bricks x-position and y-position both equal their next positions: update to the next position in the array.
			if ((brick.x < this.pathX[updateLoop-1]+3 && brick.x > this.pathX[updateLoop-1]-3) 
				&& (brick.y < this.pathY[updateLoop-1]+3 && brick.y > this.pathY[updateLoop-1]-3)) {				
				updateLoop--;

				// Since updateReverse will only be true if there isn't a "loop" it will always spin updateReverse back to false.
				if (updateLoop == 0){
					updateReverse = false;				
				}
			}
		}


	}
}