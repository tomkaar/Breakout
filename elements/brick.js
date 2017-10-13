// Brick
function Brick(top, left, width, height, color, score){
  this.x = top;
  this.y = left;
  this.width = width;
  this.height = height;
  this.color = color;
  this.score = score;
  this.status = true;
  this.count = true;
  
  var grav = 1.1;
  var gravTime = 14;  // higher number = higher bounce when killed
  var brickKilled = false;
  
  let bouncyBall = new bouncyBallSpawn(this.x, this.y);
  
  this.draw = function(){
    if(this.status){
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      this.update();
      
      // Play death animation if brick is killed
      if (brickKilled) {
        bouncyBall.draw();
        this.dieAnim();
      }

      // Add to the total Object Count
      if(this.count){
        TotalObjectCount(1);
        this.count = false;
      }
    }
  }

  this.update = function(){
      // Collision Detection
    
      if (collision(this.x, this.y, this.width, this.height) && brickKilled == false) {
        sideCollision(this.x, this.y, this.width, this.height);
        
        bouncyBall.draw();
        brickKilled = true;
        shake.small();
        sounds.hitlight();
        addScore(this.score);
        CurrentObjectCount(1);    
      }
  }
  
  this.dieAnim = function() {
    if (this.y < canvasHeight) {
      gravTime--; // gravity time. 
      let brickshotX = dx; //placeholder variable
      this.x += brickshotX; // shoots the brick towards the same way the ball was moving
      this.y = Math.floor(this.y - (gravTime * grav)); // Algorithm that creates the arc
    }
    else {
      if (!bouncyBall.bouncyStatus()) {
        this.status = false;
      }
    }
  }
}