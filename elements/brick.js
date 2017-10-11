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
  
  var looper;

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
        CurrentObjectCount(1);
        
        while (this.y != canvasHeight) {
          this.breakAnim();
        }
        
        
      }
  }
  
  this.breakAnim = function() {
    
    /*
        for (i = 0; i < canvasHeight; i++) {
          this.y += i;
          c.rect(this.x, this.y, this.width, this.height);
          c.fillStyle = this.color;
          c.fill();
          c.closePath();
          
          if (this.y >= canvasHeight) {
            this.status = false; 
          }
          
        }    */
      
          this.y++;
          c.beginPath();
          c.rect(this.x, this.y, this.width, this.height);
          c.fillStyle = this.color;
          c.fill();
          c.closePath();
          
          if (this.y >= canvasHeight) {
            this.status = false; 
          }
  }
}