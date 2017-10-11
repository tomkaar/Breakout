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
        var gravTime = 7;
  
  var brickDies = new brickKill(this.x, this.y, this.width, this.height, this.color);

  this.draw = function(){
    if(this.status){
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      this.update();

      // Add to the total Object Count
      if(this.count){
        TotalObjectCount(1);
        this.count = false;
      }
    }
  }

  this.update = function(){
      // Collision Detection
    
      if (collision(this.x, this.y, this.width, this.height)) {
        sideCollision(this.x, this.y, this.width, this.height);
        
        
        shake.small();
        addScore(this.score);
        this.dieAnim();
      }
  }
  
  this.dieAnim = function() {
    let loop = setInterval(function() {
      gravTime--;
      
      this.y = Math.floor(this.y - (gravTime * grav));
      this.x--;
      console.log("brickY: " + this.y);
    
      if (this.y >= canvasHeight) {
        CurrentObjectCount(1);    
        this.status = false;
        clearInterval(loop);
      }
      }, 150);
    
  }
}