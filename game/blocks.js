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



	// Bricks and Blocks that inherit from the BaseBlock class
		// Collision
			// What is going to happen
			// Draw & Update