// An brick or block can be linked to this function.
// Link them with x, y, width and height by writing
// if (collision(x, y, h, w)) { code } for results.
// sideCollision may be added with the same parameters.

function collision(hor, ver, width, height) {
  let DeltaX = x - Math.max(hor, Math.min(x, hor + width));
  let DeltaY = y - Math.max(ver, Math.min(y, ver + height));
  return (DeltaX * DeltaX + DeltaY * DeltaY) < (ballRadius * ballRadius);
}

function sideCollision(hor, ver, width, height) {
  if (brickPenetration == 0) {
    if (dx > 0 && x <= hor + 20) {
      dx = -dx;
    }
    if (dx < 0 && x >= hor + width - 20) {
      dx = -dx;
    }
    else {
      dy = -dy;
    }
  }  
  else if (brickPenetration > 0) {
    brickPenetration--;
    console.log("Penetration: " + brickPenetration);
  }
}

function paddleCollision(hor, ver, width, height) {
  var padX = mouse.x-padWidth/2;
  var padY = canvasHeight - padHeight - padBottom;
  
  if ((hor >= padX && hor+width <= padX + padWidth) && (ver + height >= padY)) {
    return true;
  } 
}

function playerCollision() {
//  These NEED to be declared here.
  var padX = mouse.x-padWidth/2;
  var padY = canvasHeight - padHeight - padBottom;
  
  // When the ball hit the top
  if(y - ballRadius <= 1){
    dy = -dy;
    sounds.hitheavy();
  }
  // When ball hits right side
  if(x + ballRadius >= canvasWidth - 1){
    dx = -dx; 
    sounds.hitheavy();
    x = canvasWidth - ballRadius - 5; //Prevents ball from getting stuck in the wall
  }

  // When ball hits left side
  if (x - ballRadius <= 1) {
    dx = -dx;
    sounds.hitheavy();
    x = ballRadius + 5; //Prevents ball from getting stuck in the wall
  }

  // Collision between Ball and Paddle. 
  // cx is just a placeholder. This code makes ball bounce depending
  // on where it hits the paddle
  if (collision(padX, padY, padWidth, padHeight)) {
    if (!holdBallPowerActive) {
      let cx = (x - mouse.x) / 6;
      dx = cx;          // give new speed to dx.
      dy = dy+cx * -1;  // trying to add some speed to y.
      sounds.hitmedium();
    
      if (dy > 0) {     // Make sure ball goes upwards
        dy = -dy;
        if (dy < -6) {  // set max speed for y
          dy = -6;
        }
      }
      if (powerActive) {
        gravTime = 8; // only useful for bouncyball power.
      }
    }
  }

  // If the ball misses the pad
  if(y + dy > canvasHeight - ballRadius - 15) {
      holdBall = true;
      screenRed();
      shake.big();
      removeLife(1);
      gravTime = 8;
      dy = -4;
      dx = -4;
  }

}