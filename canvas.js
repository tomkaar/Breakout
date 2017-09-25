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
    drawBall();
    drawPad();
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