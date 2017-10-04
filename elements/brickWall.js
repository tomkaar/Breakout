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
                if (x > b.x - ballRadius && x < b.x + brickWidth + ballRadius && y > b.y - ballRadius && y < b.y + brickHeight + ballRadius) {
                    
                    //Collision from right to left
                    if (dx < 0 && x >= (b.x + brickWidth - 20) && x <= b.x + brickWidth) {
                        dx = -dx;
                        shake.small();
                        b.status = 0;
                        addScore(10);
                    }
                    //Collision from left to right
                    else if (dx > 0 && x <= (b.x + brickWidth/4)) {
                        dx = -dx;
                        shake.small();
                        b.status = 0;
                        addScore(10);
                    }
                    
                    //Middle of the brick
                    else {
                        dy = -dy;
                        shake.small();
                        b.status = 0;
                        addScore(10);
                    }
                }
            }
        }
    }
}