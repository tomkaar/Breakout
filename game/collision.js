function collision(hor, ver, width, height) {
  let DeltaX = ball.x - Math.max(hor, Math.min(ball.x, hor + width));
  let DeltaY = ball.y - Math.max(ver, Math.min(ball.y, ver + height));
  return (DeltaX * DeltaX + DeltaY * DeltaY) < (ball.radius * ball.radius);
}

function sideCollision(hor, ver, width, height) {
  if (ball.dx > 0 && ball.x <= hor + 20) {
    ball.dx = -ball.dx;
  }
  if (ball.dx < 0 && ball.x >= hor + width - 20) {
    ball.dx = -ball.dx;
  }
  else {
    ball.dy = -ball.dy;
  }
}

function paddleCollision(hor, ver, width, height) {
  var padX = mouse.x-padWidth/2;
  var padY = canvasHeight - player.Height - player.Bottom;
  
  if ((hor >= padX && hor+width <= padX + player.Width) && (ver + height >= padY)) {
    return true;
  } 
}

function playerCollision() {
//  These NEED to be declared here.
  var padX = mouse.x-player.Width/2;
  var padY = canvasHeight - player.Height - player.Bottom;
  
  // When the ball hit the top
  if(ball.y - ball.radius <= 1){
    ball.dy = -ball.dy;
  }
  // When ball hits right side
  if(ball.x + ball.radius >= canvasWidth - 1){
    ball.dx = -ball.dx; 
    x = canvasWidth - ball.radius - 5; //Prevents ball from getting stuck in the wall
  }

  // When ball hits left side
  if (ball.x - ball.radius <= 1) {
    ball.dx = -ball.dx;
    ball.x = ball.radius + 5; //Prevents ball from getting stuck in the wall
  }

  // Collision between Ball and Paddle. 
  // cx is just a placeholder. This code makes ball bounce depending
  // on where it hits the paddle
  if (collision(padX, padY, player.Width, player.Height)) {
    let cx = (ball.x - mouse.x) / 6;
    ball.dx = cx;          // give new speed to dx.
    ball.dy = ball.dy+cx * -1;  // trying to add some speed to y.
  
    if (ball.dy > 0) {     // Make sure ball goes upwards
      ball.dy = -ball.dy;
      if (ball.dy < -6) {  // set max speed for y
        ball.dy = -6;
      }
    }
  }

  // If the ball misses the pad
  if(ball.y + ball.dy > canvasHeight - ball.radius - 15) {
      ball.holdBall = true;
      ball.dy = -4;
      ball.dx = -4;
      
      removeLife(1);
      screenRed();
      shake.big();
  }

}