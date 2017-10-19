  // Pad
    var padHeight = 20;
    var padWidth = 100;
    var padBottom = 30; // How far from the bottom of the canvas the pad is located 
    var mouseMovements = 0; // init Mouse Movement


  // Ball
    var ballRadius = 15;
    var acceleration = 0.5; // add speed /(pixels per frame)
    var x = canvasWidth/2; // Ball spawn x-axis
    var y = canvasHeight - ballRadius - padHeight - padBottom; // Ball spawn y-axis
    var dx = -4; // Velocity, x-axis
    var dy = -4; // Velocity, y-axis
    var holdBall = true; // Start game by holding the ball


//Holds the ball at the start of the game. Clicking makes it start moving.
function ballMove() {
  if (holdBall) {
    x = mouse.x;
    y = canvasHeight - ballRadius - padHeight - padBottom;
    // "Click when ready message" when holding the ball, show/ hidden
    if(start = '0'){
      c.font = "16px 'Press Start 2P'";
      c.fillStyle = "white";
      c.textAlign="center"; 
      c.fillText("Click when ready!",canvasWidth/2,canvasHeight - ballRadius - padHeight - padBottom - 100);
    }
  }
  else { // Ball speed. If powerActive is true it may be altered somehow.
      x += (t*dx) * speedboost;
      y += (t*dy) * speedboost;
    
    if (powerActive) {
      powerUp();
    }
  }
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
  mouseMovements = mouse.x - padWidth/2;
  c.rect(mouseMovements, canvasHeight - padHeight - padBottom, padWidth, padHeight);
  c.fillStyle = "white";
  c.fill();
  c.closePath();
}