// shift = 16

window.addEventListener("keydown", speedBoost, false);

var speedcooldown = false;
var speedCooldownTime = 121;
var brickPenetration = 0;

var boostLoop;

function speedBoost(e) {
  let keycode = e.keyCode;
  
  if (keycode == 16) {
    if (speedcooldown == false) {
      speedboost = 4;
      brickPenetration = 3; // change this to penetrate more bricks
    
      boostLoop = setInterval(function() {
        console.log("brick pen: " + brickPenetration);
        speedcooldown = true;
        speedCooldownTime -= 3;
        speedboost -= 0.1;
        
        if (speedCooldownTime < 40){
          brickPenetration = 0;
        }
        
        if (speedboost <= 1) {
          speedboost = 1;
        }
        
        if (speedCooldownTime <= 0) {
          speedboostActive = false;
          speedCooldown();
        }
      }, 1000/60); // END LOOP
    }
  }
}
  
function speedCooldown() {
  clearInterval(boostLoop);
  
  let loop = setInterval(function() {
    speedCooldownTime++;
    
    if (speedCooldownTime >= 121) {
      speedcooldown = false;
      clearInterval(loop);
    }
  }, 1000/30); // current charges cooldown with 30 per second. 
}  
  
  
function drawSpeed() {
  c.font = "12px 'Press Start 2P'";
  c.textAlign="left"; 
  c.fillStyle = "gold";
  c.fillText("Speed-boost: ", 550, canvasHeight-10);
  
  c.beginPath();
  c.rect(690, canvasHeight-22, speedCooldownTime, 10);
  if (speedCooldownTime == 121) {
    c.fillStyle = 'green';
  }
  else if (speedCooldown) {
    c.fillStyle = 'red';
  }
  else {
    c.fillStyle = 'white';
  }
  c.fill();
  
  
  c.beginPath();
  c.lineWidth = "2";
  c.strokeStyle = "white";
  c.rect(690, canvasHeight-22, 121, 11);
  c.stroke();
  
  c.closePath();
}  