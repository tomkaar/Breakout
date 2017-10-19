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
    var t = 1; // time, change the speed of objects
    var slowMoTime = 3; // for how long slowMoTime is going to last
    var speedboost = 1; // Speed boost ability for ball

  // Brick values
    var brickRow = 11;
    var brickCol = 10;
    var brickPaddingX = 20;
    var brickPaddingY = 10;
    var brickWidth = (canvasWidth/brickRow) - brickPaddingX - 20/brickRow;
    var brickHeight = 25;

  // Slowmotion values
    var smt = slowMoTime;

function Basics() {
    c.clearRect(0, 0, canvasWidth, canvasHeight);
    drawBall();
    drawPad();
    drawScore();
    drawLife();
    drawSlomo();
    drawSpeed();
    ballMove();
    drawInfoText();
    playerCollision();
  } // END Basics

// Start Screen
function startGame(){
  document.querySelector(".active").classList.remove("active");
  start = '0';
  sounds.scifiJingle();
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
  c.fillText("Space/ ctrl = Slowmotion \t P = Pause", canvasWidth-40, canvasHeight-10);
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

// A randomizer which can be called from wherever
function diceroll(min, max) {
  let roll = Math.floor(Math.random() * max-min) + min; // rolls from min to max
  return roll;
} 

function gameloop() {
  
  Basics(); // Do not remove
  
  levelSelect[levels].draw();
  
  window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);