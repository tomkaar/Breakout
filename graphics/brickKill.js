function brickKill(brickX, brickY, brickWidth, brickHeight, brickColor) {
  let boop = brickY + (brickY/4);
    
    brickY++;
    
    console.log("brickY: " + brickY);
    
    c.beginPath();
    c.rect(brickX, brickY, brickWidth, brickHeight);
    c.fillStyle = 'blue';
    c.fill();
    c.closePath();
    boop -= 10;
  
  /*
  let loop = setInterval(function() {
    brickY++;
    
    console.log("brickY: " + brickY);
    
    c.beginPath();
    c.rect(brickX, brickY, brickWidth, brickHeight);
    c.fillStyle = 'blue';
    c.fill();
    c.closePath();
    boop -= 10;
    
    if (brickY >= canvasHeight) {
      clearInterval(loop);
    }
  }, 160);     */
}