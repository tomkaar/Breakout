

// Canvas Basics
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

//  Configuration
  // Canvas
    var canvasHeight = window.innerHeight;
    var canvasWidth = window.innerWidth;
    var intervall = 10;

  // Screen effects
    var redScreen = document.getElementById("screenRed");
    var start = '0';

  // Game related
    var totalScore = 0;
    var life = 3;
    var t = 1; // time, change the speed of objetcs
    var slowMoTime = 3; // for how long slowMoTime is going to last
    var shake = new screenshake();

  // Pad
    var padHeight = 20;
    var padWidth = 100;
    var padBottom = 30; // How far from the bottom of the canvas the pad is located 

  // Ball
    var ballRadius = 15;
    var acceleration = 0.5; // add speed /(pixels per frame)
    var x = canvasWidth/2; // Ball spawn x-axis
    var y = canvasHeight - ballRadius - padHeight - padBottom; // Ball spawn y-axis
    var dx = -4; // Velocity, x-axis
    var dy = -4; // Velocity, y-axis
    var holdBall = true; // Start game by holding the ball

  // Brick Wall
    var brickRow = 11;
    var brickCol = 4;
    var brickPaddingX = 20;
    var brickPaddingY = 10;
    var brickWidth = (canvasWidth/brickRow) - brickPaddingX - 20/brickRow;
    var brickHeight = 25;

// Init Elements

  // Create brick objects. 
  var brick = [];
  for(var row = 0; row < brickRow; row++) {
          brick[row] = [];
      for (var col = 0; col < brickCol; col++) {
          brick[row][col] = {
              x: 0, y: 0, status: 1
          }
      }
  }

  // Create single objects
    // Each Object needs to be stored in it's own variable.
    // To render the objects you need to call the draw function
    // from inside the animate function below.  

    // Brick(x, y, width, height, color, score);

    var brickTest = new Brick(100, 250, 100, 25, 'rgb(255,0,170)', 10);
    var brickTest2 = new Brick(100, 300, 100, 25, '#00AAFF', -15);
    var brickTest3 = new Brick(650, 350, 100, 25, 'rgba(255,170,0,1)', 10);

    // Block(x, y, width, height, color);

    var blockTest = new Block(200, 350, 25, 100, 'grey');
    var blockTest2 = new Block(600, 200, 100, 25, 'grey');

    // MovingBlock(x, y, width, height, color, speed x-axes, speed y-axes);

    var movingBlockTest = new MovingBlock(50, 500, 100, 25, 'grey', 1, 0);

function Basics(){
    c.clearRect(0, 0, canvasWidth, canvasHeight);
    drawBall();
    drawPad();
    drawScore();
    drawLife();
    ballMove();
    drawInfoText();
    
    // COLLISSION!!
    // When the ball hit the top
    if(y - ballRadius < 0){
      dy = -dy;
    }
    // When the ball hit the sides
    if(x + ballRadius > canvasWidth|| x - ballRadius < 0){
      dx = -dx;
    }
    // if ball Y equals pad Y
    if(y + dy > canvasHeight - ballRadius - 50) {
        
        // If the ball hit the pad
        if(x > mouse.x - padWidth/2 - ballRadius && x < mouse.x + padWidth/2 + ballRadius) {
            //If ball comes from LEFT and hits LEFT side of pad
            if (dx > 0 && x > mouse.x - padWidth/2 - ballRadius && x < mouse.x - padWidth/3) {
                dx = -dx;
                dy = -dy;
            }
            //If ball comes from RIGHT and hits RIGHT side of pad
            else if (dx < 0 && x > mouse.x + padWidth/4 && x < mouse.x + padWidth/2 + ballRadius) {
                dx = -dx;
                dy = -dy;
            }
            //If ball hits in the middle of pad. Slows X and reverses Y
            else {
                dy = -dy;
            }
        }
    }
    // If the ball misses the pad
    if(y + dy > canvasHeight - ballRadius - 15) {
        holdBall = true;
        screenRed();
        shake.big();
        removeLife(1);
        dy = -dy;
    }
}

// Start Screen
function startGame(){
      document.querySelector(".active").classList.remove("active");
      start = '0';
    }
    if(start = '0'){
      canvas.addEventListener("click", function() {
              holdBall = false;
      });
    }

function drawInfoText(){
  c.font = "12px 'Press Start 2P'";
  c.textAlign="right"; 
  c.fillStyle = "gold";
  c.fillText("P = Pause", canvasWidth-40, canvasHeight-10);
}


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
    else {
        x += (t*dx);
        y += (t*dy);
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
  c.rect(mouse.x-padWidth/2, canvasHeight - padHeight - padBottom, padWidth, padHeight);
  c.fillStyle = "white";
  c.fill();
  c.closePath();
}

// Resize
function resize(){
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}
resize();
window.addEventListener( 'resize', function(){
  resize();
} );

// Track mouse Movement
var mouse = {
  x: canvasWidth/2
}
canvas.addEventListener('mousemove', function(event){
  mouse.x = event.x;
})

window.setTimeout(gameloop, intervall);

function gameloop() {
    
        Basics(); // Do not remove
        // Draw Brick Wall
        drawBrick();
        collisionDetect();
        
        // This is where you call the draw functions
        // Without this the objects won't render
        brickTest.draw();
        brickTest2.draw();
        brickTest3.draw();
        blockTest.draw();
        blockTest2.draw();
        movingBlockTest.draw();
    
    setTimeout(gameloop, intervall);
}


//var gameloop = setInterval(animate, intervall);