//Fill each brick object with a graphic
function drawBrick() {
    for(var row = 0; row < brickRow; row++) {
        for (var col = 0; col < brickCol; col++) {
            var b = brick[row][col];
            
            if (b.status == 1) {
                var bx = (row * (brickWidth + 20)) + 20;
                var by = (col * (brickHeight + 10)) + 20;
                b.x = bx;
                b.y = by;
                c.beginPath();
                c.rect(bx, by, brickWidth, brickHeight);
                c.fillStyle = "#ff0000";
                c.fill();
                c.closePath();
            }
        }
    }
}

//Collission med bricks
function collisionDetect() {
    for(var row = 0; row < brickRow; row++) {
        for (var col = 0; col < brickCol; col++) {
            var b = brick[row][col];
            
            if (b.status == 1) {    

                //Prevents all bricks in Y axis from being destroyed
                if (x >= b.x && x <= b.x+brickWidth && y >= b.y && y <= b.y + brickHeight) {
                    
                    //Collision
                    if (x <= b.x + brickWidth/2) {
                        dx = -dx;
                        b.status = 0;
                        addScore(10);
                    }
                    if (y <= b.y + brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        addScore(10);
                    }
                }
            }
        }
    }
}