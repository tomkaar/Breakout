// Basic GameLoop
function gameloop() {
  c.clearRect(0, 0, canvasWidth, canvasHeight);
  
  Ball();
  Player();
  playerCollision();

  drawLife();
  drawScore();

  //brick1.draw();
  //levelsArray[currentLevel][1].draw();
  
  drawLevels();
  
  // Make gameloop run
  window.requestAnimationFrame(gameloop);
}
window.requestAnimationFrame(gameloop);






 //var brick1 = new Brick(200, 50, 300, 300, "red", 2);



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
  canvasHeight = window.innerHeight;
  canvasWidth = window.innerWidth;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}
  resize();
  window.addEventListener( 'resize', function(){ resize(); });

// Restart game by reloading window
function restartGame(){
  location.reload();
}










// Level Builder
// This function translates the data from inside the 'levels' array (game/levels.js) into 
// Bricks and Blocks that will build each level

var levelsArray = [];
// This only needs to happen once so we can call the function from here.
BuildLevels();
function BuildLevels() {
  // Loop through the 'levels' array, find each level and each brick in that level
  for(var i = 0; i < levels.length; i++){
    let level = [];
    for(var j = 0; j < levels[i].length; j++){
      // Depending on the first var in the array -> Choose type of block
      if(levels[i][j][0] == "Block"){
        // create Block using the information from 'levels[level][currentBrick]'
        let brick = new Block(levels[i][j][1], levels[i][j][2], levels[i][j][3], levels[i][j][4], levels[i][j][5]);
        // Add brick to level array
        level.push(brick);
      }
      if(levels[i][j][0] == "Brick"){
        let brick = new Brick(levels[i][j][1], levels[i][j][2], levels[i][j][3], levels[i][j][4], levels[i][j][5], levels[i][j][6]);
        level.push(brick);
      }
    }
    // Add generated level to levelsArray
    levelsArray.push(level);
  }
}

// Draw the levels
// Called from GameLoop function
function drawLevels() {
  for (var i in levelsArray[currentLevel]) {
    levelsArray[currentLevel][i].draw();
  }
}

// Switch between levels using Z & X
window.addEventListener("keydown", levelJump, false);
function levelJump(e) {
    var leveljump = e.keyCode;
    if (leveljump == 88) { // 88 = x
      currentLevel++;
      ball.holdBall = true;
      if (currentLevel >= levelsArray.length) {
        currentLevel = 0;
      }
  }
    if (leveljump == 90) { // 90 = z
      currentLevel--;
      ball.holdBall = true;
      if (currentLevel < 0) {
        currentLevel = levelsArray.length-1;
      }
    }
}