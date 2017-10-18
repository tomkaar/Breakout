
var powerActive = false;
let gravTime = 3; // higher gravTime = higher bounce
let powerTimer = 3000;
var whichPower; // an integer to make sure which power will get activated
var holdBallPowerActive = false;

// POWER UP TIMER
function powerUp() {
  
  if (powerActive) {
  //A selection of different powerups
  switch (whichPower) {
    case 1:
      bouncyBallPower();
      this.timer;
      break;
    case 2:
      bouncyBallPower();
      this.timer;
      break;
    case 3:
      bouncyBallPower();
      this.timer;
      break;
    case 4:
      bouncyBallPower();
      this.timer;
      break;
    case 5:
      bouncyBallPower();
      this.timer;
      break;
    case 6:
      holdBallPower();
      this.timer;
      break;
    case 7:
      holdBallPower();
      this.timer;
      break;
    case 8:
      holdBallPower();
      this.timer;
      break;
    case 9:
      holdBallPower();
      this.timer;
      break;
    case 10:
      holdBallPower();
      this.timer;
      break;
 }
  
  this.timer = function() {
    powerTimer--;
    powerUp();
    
    if (powerTimer == 0) {
      powerActive = false;
      holdBallPowerActive = false;
      gravTime = 8;
      powerTimer = 3000;
      console.log("powerUP: " + powerActive);
    }
  }
  }
}

// HOLD BALL POWER
function holdBallPower() {
  //holdBallPowerActive = true;
  
  // these already exist in canvas.js but need to be declared inside this function
  var padX = mouse.x-padWidth/2;
  var padY = canvasHeight - padHeight - padBottom;
  let hold;
  
  if (collision(padX, padY, padWidth, padHeight)) {
      hold = true;
  }
  
  if (hold) {
      let cx = (x - mouse.x) / 6;
      x = mouse.x;
      y = padY - ballRadius;
      
      canvas.addEventListener("click", function() {
        hold = false;
      });
    }
   else {
      dx = -4;          // give new speed to dx.
      dy = -4;  // trying to add some speed to y.
      x += (t*dx) * speedboost;
      y += (t*dy) * speedboost;
   } 
}

// BOUNCY BALL POWER
function bouncyBallPower() {  
  console.log("bouncyBallPower activated");
  
  if (powerActive) {
  // lower value in gravTime = higher gravity.
    gravTime -= 0.1; 
  
  //sets ballspeed to incorporate gravity.
    x += (t*dx) * speedboost;
    y += t*((dy) * speedboost)-(gravTime * 1);
  
  //max speed.
    if (dy > 8) {
      dy = 8;
    }
    if (dy < -8) {
      dy = -8;
    }
  }
}


//SPAWN FUNCTION
function powerUpSpawn(spawnX, spawnY) {  
  let hori = spawnX;
  let vert = spawnY;
  
  let dropRoll = Math.floor(Math.random() * 10);
  
  let drawStatus = false;
  
  if (dropRoll > 0) { // if math.random rolls 0 - 10 powerup will spawn
    drawStatus = true;
  }
 
  
this.draw = function() {
     
  //Roll for which powerup will spawn
  whichPower = dropRoll; // Lets us know which power will be spawned
  
  let powerColor = 'black'; // if a power turns black we know something isn't working
  
  //test to make sure that the power and its colors will be randomized
  powerColor = this.getColor(dropRoll);
    
    if (drawStatus) {
      c.beginPath();
      c.rect(hori, vert, 30, 30);
      c.fillStyle = powerColor;
      c.fill();
      c.closePath();
      this.update();
    }
    else {
      return;
    }
  }
    
this.update = function() { 
  vert += 2; // power up will slowly drop down
  
  // IF PLAYER PICKS UP POWER
  if(paddleCollision(hori, vert, 30, 30)) {
    
    drawStatus = false; // Stop powerup drawing animation
    powerActive = true; // Activate powerup
    powerUp();
  }
  else if (vert >= canvasHeight) {
    drawStatus = false; // If player misses to pick up power
  }
}
  
this.powerUpStatus = function() {
  return drawStatus;
}

  
this.getColor = function(color) {  
  
  this.color = color;
  
  switch (whichPower) {
    case 1:
      this.color = 'white';
      break;
    case 2:
      this.color = 'yellow';
      break;
    case 3:
      this.color = 'green';
      break;
    case 4:
      this.color = 'blue';
      break;
    case 5:
      this.color = 'cyan';
      break;
    case 6:
      this.color = 'orange';
      break;
    case 7:
      this.color = 'red';
      break;
    case 8:
      this.color = 'gray';
      break;
    case 9:
      this.color = 'purple';
      break;
    case 10:
      this.color = 'pink';
      break;
 }  
  return this.color;
}  

}