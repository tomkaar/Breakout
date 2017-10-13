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