//  Basics
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

// Resize
function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener( 'resize', function(){
  resize();
} );

// Score
var totalScore = 0;
function updateScore(score){
  totalScore += score;
  document.getElementById('gamebar-score').innerHTML = totalScore;
  document.getElementById('gamestop-score').innerHTML = totalScore;
}

// Track Mouse Movement
var mouse = {
  x: innerWidth/2
}
window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
})

// Pad
var padWidth = 100;
function pad(){
  c.fillStyle = 'rgba(255, 255, 255, 1)';
  c.fillRect(mouse.x - padWidth/2, innerHeight - 50, padWidth, 20);
}

// Ball
var radius = 15;
var ballX = innerWidth/2;
var ballY = innerHeight-50-radius;
var ballX = 200;
var ballY = 25;
var dx = -4;
var dy = -4;
function ball(){
  c.beginPath();
  c.arc(ballX, ballY, radius, 0, Math.PI * 2, false);
  c.fillStyle = 'rgba(255, 255, 255, 1)';
  c.fill();

  ballX += dx;
  ballY += dy;
  var padX = mouse.x;
  var padY = innerHeight - 50;

  //get Distance between ball and pad (center center)
  var xDist = getxDistance(ballX, padX) + radius;
  var yDist = getyDistance(ballY, padY) + radius;

  // When the ball hit the top of the pad
  if (yDist > 0 && yDist < 20 && xDist < padWidth/2 && xDist > -padWidth/2){
    // add speed to the ball
    dx += 0.5;
    dy += 0.5;
    // bounce back
    dy = -dy;
  }

  // When the ball hit the walls
  if(ballX + radius > innerWidth || ballX - radius < 0){
    dx = -dx;
  }
  if(ballY - radius < 0){
    dy = -dy;
    updateScore(10);
  }
  // When the ball hit the bottom
  if(ballY - radius > innerHeight){
    stop();
    return 0;
  }
}

// Get distance between ball and pad
function getxDistance(x, x1) {
  return x - x1;
}
function getyDistance(y, y1) {
  return y - y1;
}

// targets
function Target(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.draw = function(){
    c.fillStyle = 'orange';
    //c.fillRect(this.x, this.y, this.width, this.height);
  }

  

  this.update = function(){

    col(this.x, this.y, this.width, this.height);
    this.draw();
  };
}

function col(thisX, thisY, thisWidth, thisHeight){
  //console.log(thisX);
  //console.log(ballX);
  //console.log(thisY);
  //console.log(ballY);

  var colXDist = getxDistance(ballX, thisX) + radius;
  var colYDist = getyDistance(ballY, thisY) + radius;
  //console.log('X: ' + colXDist);
  //console.log('Y: ' + colYDist);


    c.fillStyle = 'blue';
    c.fillRect(thisX, thisY, thisWidth, 1);

  // When the ball hit the top of the pad
  if (colYDist > 0 && colYDist < 1 && colXDist < thisWidth && colXDist > -thisWidth){
    dy = -dy;
    console.log("top");
  }
}

// Stop
function stop(){
  document.getElementById("gamestop").classList.add('active');
  ballX = innerWidth/2;
  ballY = innerHeight/2;
  dx = 0;
  dy = 0;
  return 0;
}


// Set targets
//var target = new Target(50, 50, 50, 50);
//var target2 = new Target(150, 50, 100, 50);

// Animate Function
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  //c.clearRect(0, innerHeight - 50, innerWidth + 100, innerHeight + 100);

  // Call elements
  pad();
  ball();
  target.update();
  target2.update();
}
animate();






