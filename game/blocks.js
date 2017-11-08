// Tiles
	// function is supposed to automatically assign a brick to a space in a symmetrical manner. 
	// One can technically put a brick anywhere and even outside of the game

	var tile = new tiles();
	function tiles() {
	  
	  this.row = function(sum) {
	    if (sum > brickRow || sum < 0) sum = brickRow;
	    return (sum * (brickWidth + brickPaddingX)) + 20; 
	  }
	  
	  this.col = function(sum) {
	    if (sum > brickCol || sum < 0) sum = brickCol;
	    return (sum * (brickHeight + brickPaddingY)) + 20; 
	  }
	   
	}


// BaseBlock class
function BaseBlock(x, y, width, height, color) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.color = color;
	this.status = true;
	this.hitConfirm = false;

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
}





function Brick(x, y, width, height, color, lives) {
	this.prototype = new BaseBlock(x, y, width, height, color);
	this.lives = lives;

	let brick = this.prototype;

	this.draw = function() {
		if(brick.status) {
			brick.draw();
			if (brick.hitConfirm) {
				lives--;
				if (lives <= 0) {
					brick.status = false;
				}
			}
		}	
	}	
}			

