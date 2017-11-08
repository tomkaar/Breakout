// Basic GameLoop
function gameloop() {
  c.clearRect(0, 0, canvasWidth, canvasHeight);
  
  Ball();
  Player();
  playerCollision();

  drawLife();
  drawScore();
  
  // Make gameloop run
  window.requestAnimationFrame(gameloop);
}
window.requestAnimationFrame(gameloop);







// Mouse (to get mouse x-position, use mouse.x)
var mouse = {
  x: canvasWidth/2
}
  // Update Mouse positions when moving mouse
  canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
  })





// Everything Ball
function Ball() {
  // Draw Ball
  c.beginPath();
  c.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
  c.fillStyle = "white";
  c.fill();
  c.closePath();

  // Update ball position
  if(ball.holdBall) {
    ball.x = mouse.x;
    ball.y = canvasHeight - player.Height - player.Bottom- ball.radius;
  }
  else {
    ball.x += (t*ball.dx);
    ball.y += (t*ball.dy);
  }
}





// Everything Player
function Player() {
  // Mouse movements (x-position)
  mouseMovements = mouse.x - player.Width/2;

  c.beginPath();
  c.rect(mouseMovements, canvasHeight - player.Height - player.Bottom, player.Width, player.Height);
  c.fillStyle = "white";
  c.fill();
  c.closePath();

  // Move when arrowkeys are pressed (look in screens.js)
  if(leftKeyPressed == true){
    mouse.x -= player.Width/10; 
  }
  if(rightKeyPressed == true){
    mouse.x += player.Width/10;
  }
}




// Player, arrowkeys
  var leftKeyPressed = false;
  var rightKeyPressed = false;

  window.addEventListener("keydown", keyArrowDown, false);
  function keyArrowDown(e) {
      let key = e.keyCode;
      if (key == 37) { // 37 = Left Arrow
        leftKeyPressed = true;
        //KeysPressed();
    }
      if (key == 39) { // 39 = Right Arrow
        rightKeyPressed = true;
        //KeysPressed();
      }
  }

  window.addEventListener("keyup", keyArrowUp, false);
  function keyArrowUp(e) {
      let keyUp = e.keyCode;
      if (keyUp == 37) { // 37 = Left Arrow
        leftKeyPressed = false;
        //KeysPressed();
    }
      if (keyUp == 39) { // 39 = Right Arrow
        rightKeyPressed = false;
        //KeysPressed();
      }
  }











// Set and Resize canvas
function resize(){
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}
resize();
window.addEventListener( 'resize', function(){ resize(); });

// Restart game by reloading window
function restartGame(){
  location.reload();
}