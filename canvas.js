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
var brickRad = 6;
var brickKol = 4;
var brickWidth = 80;
var brickHeight = 40;


//Create brick objects. 
var brick = [];
for(var rad = 0; rad < brickRad; rad++) {
        brick[rad] = [];
    for (var kol = 0; kol < brickKol; kol++) {
        brick[rad][kol] = {
            x: 0, y: 0, status: 1
        }
    }
}


//Fill each brick object with a graphic
function drawBrick() {
    for(var rad = 0; rad < brickRad; rad++) {
        for (var kol = 0; kol < brickKol; kol++) {
            var b = brick[rad][kol];
            
            if (b.status == 1) {
                var bx = (rad * (brickWidth + (window.innerWidth / 6))) + 20;
                var by = (kol * (brickHeight + 10)) + 20;
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
    for(var rad = 0; rad < brickRad; rad++) {
        for (var kol = 0; kol < brickKol; kol++) {
            var b = brick[rad][kol];
            
            if (b.status == 1) {    

                if (x >= b.x && x <= b.x+brickWidth && y >= b.y && y <= b.y + brickHeight) {
                    
                    //FÖLJANDE ÄR VAD SOM ARBETAS MED!
                    //JAG FÖRSÖKER FÅ BOLLEN ATT VÄNDA ÅT RÄTT HÅLL
                    //VID COLLISION!!!!
                    if (x + ballRadius <= b.x + brickWidth/2) {
                        dy = -dy;
                    b.status = 0;
                    }
                    else if (y + ballRadius <= b.y + brickHeight/2) {
                        dx = -dx;
                    b.status = 0;
                    }
                }
            }
                
                /*
                var distX = Math.abs(x - b.x-brickWidth/2);
                var distY = Math.abs(y - b.y-brickHeight/2);

                if (distX > (b.x/2 + ballRadius)) { return false; }
                if (distY > (b.y/2 + ballRadius)) { return false; }

                if (distX <= (b.x + brickWidth/2)) {
                     dy = -dy;
                     addScore(10);
                    console.log(b);
                     b.status = 0;
                }

                if (distY <= (b.y + brickHeight/2)) {
                     dx = -dx;
                     addScore(10);
                        console.log(b);
                     b.status = 0;
                }
                */
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