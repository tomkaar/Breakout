// Block
function Block(top, left, width, height, color){
  this.x = top;
  this.y = left;
  this.width = width;
  this.height = height;
  this.color = color;
  this.status = true;

  this.draw = function(){
    if(this.status){
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      this.update();
    }
  }

  this.update = function(){
      // Collision Detection
      
      if (collision(this.x, this.y, this.width, this.height)) {
          sideCollision(this.x, this.y, this.width, this.height);
        sounds.hitlight();
      }
  }
}
