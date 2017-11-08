// Tiles
	// function is supposed to automatically assign a brick to a space in a symmetrical manner. 
	// One can technically put a brick anywhere and even outside of the game

	var tile = new tiles();
	function tiles() {
	  
	  this.row = function(sum) {
	    if (sum > brickRow || sum < 0) sum = brickRow;
	    return (sum * (brickWidth + brickPaddingX)) + 20; 
	  }
	  
	  this.column = function(sum) {
	    if (sum > brickCol || sum < 0) sum = brickCol;
	    return (sum * (brickHeight + brickPaddingY)) + 20; 
	  }
	   
	}


// BaseBlock class
	// Width, height, X, Y, Color
function BaseBlock(width, height, x, y, color) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.color = color;
	this.status = true;
	this.hitConfirm = false;

	// Variables related to death animation
	var grav = 1.1;
  var gravTime = 14;  // higher number = higher bounce when killed
  var brickKilled = false;

	this.draw = function() {
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      this.update();
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

	this.dieAnim = function() {
    if (this.y < canvasHeight) {
      gravTime--; // gravity time. 
      let brickshotX = ball.dx; //placeholder variable
      this.x += brickshotX; // shoots the brick towards the same way the ball was moving
      this.y = Math.floor(this.y - (gravTime * grav)); // Algorithm that creates the arc
    }
    else {
      this.status = false;
    }
  }
}


	// Bricks and Blocks that inherit from the BaseBlock class
		// Collision
			// What is going to happen
			// Draw & Update

function Brick(width, height, x, y, color, lives) {
	this.prototype = new BaseBlock(width, height, x, y, color);
	this.lives = lives;

	let brick = this.prototype;

	this.draw = function() {
		if(brick.status) {
			brick.draw();
			if (lives > 0 && brick.hitConfirm) {
				lives--;
			}
			else {
				brick.dieAnim();
			}
		}	
	}	
}			