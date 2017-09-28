// Canvas Basics
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

//  Config
var totalScore = 0;
var acceleration = 0.5;
var intervall = 10;
var ballRadius = 15;
var x = innerWidth/2;
var y = innerHeight - ballRadius - 70;
var dx = -2;
var dy = -2;
var padHeight = 20;
var padWidth = 100;
var brickRow = 15;
var brickCol = 4;
var brickWidth = 80;
var brickHeight = 40;


//Create brick objects. 
var brick = [];
for(var row = 0; row < brickRow; row++) {
        brick[row] = [];
    for (var col = 0; col < brickCol; col++) {
        brick[row][col] = {
            x: 0, y: 0, status: 1
        }
    }
}


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
                    }
                    if (y <= b.y + brickHeight) {
                        dy = -dy;
                        b.status = 0;
                    }
                }
            }
        }
    }
}

// Resize
function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener( 'resize', function(){
  resize();
} );

// Track mouse Movement
var mouse = {
  x: innerWidth/2
}
window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
})

// Keep track of score
function addScore(thisScore){
  tScore(totalScore += thisScore);
}
function removeScore(thisScore){
  tScore(totalScore -= thisScore);
}
function tScore(newScore){
  totalScore = newScore;
  document.getElementById('gamebar-score').innerHTML = totalScore;
  document.getElementById('gameover-score').innerHTML = totalScore ;
}

// Game Over
function gameOver(){
  document.getElementById("gameover").classList.add('active');
  ballRadius = 15;
  x = innerWidth/2;
  y = innerHeight - ballRadius - 70;
  dx = 0;
  dy = 0;
}

// Restart game by reloading window
function restartGame(){
  location.reload();
}

// Draw Ball
function drawBall() {
    c.beginPath();
    c.arc(x, y, ballRadius, 0, Math.PI*2);
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}

// Draw Pad
function drawPad() {
    c.beginPath();
    c.rect(mouse.x-padWidth/2, window.innerHeight-padHeight - 30, padWidth, padHeight);
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}

function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawBrick();
    drawBall();
    drawPad();
    collisionDetect();
    x += dx;
    y += dy;

    // When the ball hit the top
    if(y - ballRadius < 0){
      dy = -dy;
      addScore(10);
    }
    // When the ball hit the sides
    if(x + ballRadius > window.innerWidth || x - ballRadius < 0){
      dx = -dx;
    }
    // When the ball hit the bottom
    else if(y + dy > window.innerHeight - ballRadius - 50) {
        // If the ball hit the pad
        if(x > mouse.x - padWidth/2 - ballRadius && x < mouse.x + padWidth/2 + ballRadius) {
          dx += acceleration;
          dy += acceleration;
          dy = -dy;
        }
        // If the ball misses the pad
        else {
            gameOver();
        }
    }
}

setInterval(animate, intervall);