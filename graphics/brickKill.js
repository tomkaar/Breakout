function brickKill(brickX, brickY, brickWidth, brickHeight, brickColor) {
  let boop = brickY + (brickY/4);
  
  let loop = setInterval(function() {
    brickY += boop / brickY;
    
    console.log("brickY: " + brickY);
    
    c.beginPath();
    c.rect(brickX, brickY, brickWidth, brickHeight);
    c.fillStyle = brickColor;
    c.fill();
    c.closePath();
    boop -= 10;
    c.clearRect(brickX, brickY, brickWidth, brickHeight);
    
    if (brickY >= canvasHeight) {
      clearInterval(loop);
    }
  }, 160);     
}