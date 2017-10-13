
var bouncyBallActive = false;
let gravTime = 3; // higher gravTime = higher bounce
let timer = 3000;

function bouncyBall() {
  //bouncyBall();
  let loop;
  
  
  gravTime -= 0.1; // gravity time. 
  
  if (dy > 8) {
    dy = 8;
  }
  if (dy < -8) {
    dy = -8;
  }
  
  x += (t*dx) * speedboost;
  y += t*((dy) * speedboost)-(gravTime * 1);
  
  console.log(timer);
  
  
  setTimeout(function() {
    this.timer();
  }, 1000);
  
  
  this.timer = function() {
    timer--;
    
    if (timer == 0) {
      bouncyBallActive = false;
      gravTime = 8;
      timer = 10;
      console.log(bouncyBallActive);
    }
  }
  
}

function bouncyBallSpawn(spawnX, spawnY) {
  
  let hori = spawnX;
  let vert = spawnY;
  
  let dropRoll = Math.floor(Math.random() * 10);
  
  let drawStatus = false;
  
  if (dropRoll > 8) {
    drawStatus = true;
  }
  
this.draw = function() {
    
    if (drawStatus) {
      c.beginPath();
      c.rect(hori, vert, 30, 30);
      c.fillStyle = 'white';
      c.fill();
      c.closePath();
      this.update();
    }
    else {
      return;
    }
  }
    
this.update = function() { 
    vert++;
    console.log(vert);
    
    if(paddleCollision(hori, vert, 30, 30)) {
      drawStatus = false;
      console.log(status);
      bouncyBallActive = true;
    }
    else if (vert >= canvasHeight) {
      drawStatus = false;
    }
  }
  
  this.bouncyStatus = function() {
    return drawStatus;
  }
}