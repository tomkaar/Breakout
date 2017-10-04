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

  // Game related
    var totalScore = 0;
    var life = 3;

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
    var brickWidth = 110;
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



function animate() {
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
}


function Basics(){
    c.clearRect(0, 0, canvasWidth, canvasHeight);
    drawBall();
    drawPad();
    drawScore();
    drawLife();
    ballMove();
    
    //Click to start the game.
    canvas.addEventListener("click", function() {
            holdBall = false;
    });
    
    
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
        screenshake();
        removeLife(1);
        dy = -dy;
    }
}


//Holds the ball at the start of the game. Clicking makes it start moving.
function ballMove() {
    if (holdBall) {
        x = mouse.x;
        y = canvasHeight - ballRadius - padHeight - padBottom;
    }
    else {
        x += dx;
        y += dy;
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


// Score
function drawScore(){
  c.font = "16px 'Press Start 2P'";
  c.fillStyle = "gold";
  c.fillText("Score: "+ totalScore, 10, canvasHeight-10);
  document.getElementById('gameover-score').innerHTML = totalScore;
}
function addScore(newScore){
  totalScore += newScore;
}
function removeScore(newScore){
  totalScore -= newScore;
}

// Lives
function drawLife(){
  c.font = "16px 'Press Start 2P'";
  c.fillStyle = "gold";
  c.fillText("Lives: "+ life, 150, canvasHeight-10);

  if(life <= 0){
    gameOver();
  }
}
function addLife(newLife){
  life += newLife;
}
function removeLife(newLife){
  life -= newLife;
}





// Game Over
function gameOver(){
  document.getElementById("gameover").classList.add('active');
  ballRadius = 15;
  x = canvasWidth/2;
  y = canvasHeight - ballRadius - padHeight - padBottom;
  dx = 0;
  dy = 0;
  mouse.x = canvasWidth/2;
}

// Restart game by reloading window
function restartGame(){
  location.reload();
}


// Screen Shake
  // Just make sure the last number in the array is 0
  // so when the shake is over the screen will be back at 0
function screenshake() {
  var arrX = [1, -1, -2, 2, 1, -1, -2, 2, -1, 1, 1, 0];
  var arrY = [1, -2, 0, 2, -1, 2, 1, 1, -1, 2, -2, 0];

    
    /*
    //Metod 1
  for (var i = 0; i < arrX.length + 1; i++){
   (function(i) {
      setTimeout(function(){
        canvas.style.transform = "translate(" + arrX[i] + "px, " + arrY[i] + "px)";
      }, 50 * i);
    })(i);
  }*/
    
    //Metod 2
    var i = 0;
    
    var shaker = setInterval(function() {
        canvas.style.transform = "translate(" + arrX[i] + "px, " + arrY[i] + "px)";
        i++;
        
        if (i >= arrX.length) {
            clearInterval(shaker);
        }
    }, 30);
}



// Red screen effect when losing a life
function screenRed() {
    
    //Reset opacity to 80%
    var opac = 0.8;
    
    //create & run an interval loop with 10ms intervals. 
    var SR = setInterval(function() {
        redScreen.style.background = "rgba(255, 0, 0, " + opac + ")";
        opac -= 0.01;
    
        if (opac <= 0) {
            clearInterval(SR);
        }
    }, 10);
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


setInterval(animate, intervall);