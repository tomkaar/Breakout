// Game Over
var play = true;
function gameOver(){
  document.getElementById("gameoverscreen").classList.add('active');
  ballRadius = 15;
  x = canvasWidth/2;
  y = canvasHeight - ballRadius - padHeight - padBottom;
  dx = 0;
  dy = 0;
  mouse.x = canvasWidth/2;
  holdBall = false;

  
  if(play == true){
  	sounds.sadJingleBitcrush();
  	play = false;
  	console.log(this.play);
  }
}

// Restart game by reloading window
function restartGame(){
  location.reload();
}