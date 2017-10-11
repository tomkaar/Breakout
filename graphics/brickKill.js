
function brickKill(brickX, brickY, brickWidth, brickHeight, brickColor) {
  var grav = 1.1;
  var gravTime = 7;
  
  this.draw = function() {
      c.beginPath();
      c.rect(brickX, brickY, brickWidth, brickHeight);
      c.fillStyle = brickColor;
      c.fill();
      c.closePath();
  }
  
  this.animate = function() {
    let loop = setInterval(function() {
      gravTime--;
      
      brickY = Math.floor(brickY - (gravTime * grav));
      brickX--;
      console.log("brickY: " + brickY);
      this.draw;
    
      if (brickY >= canvasHeight) {
        clearInterval(loop);
      }
    }, 160);
    
  }
      
}