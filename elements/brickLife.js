// BrickLife
function BrickLife(top, left, width, height, color, score, life){
  this.x = top;
  this.y = left;
  this.width = width;
  this.height = height;
  this.color = color;
  this.score = score;
  this.life = life;
  this.currentLife = 0;
  this.status = true;
  this.count = true;

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
        //dy = -dy;
        shake.small()
        this.currentLife++;
        console.log(this.currentLife);
        if(this.currentLife >= this.life){
          addScore(this.score);
          this.status = false;
          CurrentObjectCount(1);
        }
      }
  }
}