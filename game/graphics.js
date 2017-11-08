
/* Screens/ Popups/ Modules */

  // Global 
  var pausScreen = document.getElementById("pausscreen");
  var gameOverScreen = document.getElementById("gameoverscreen");
  var redScreen = document.getElementById("screenRed");



  // Start Screen
  function startGame(){
    document.querySelector(".active").classList.remove("active");
    start = '0';
  }
  // Hold ball = false whne click
  if(start = '0'){
    canvas.addEventListener("click", function() {
      ball.holdBall = false;
    });
  }



  // Paus Screeen
  window.addEventListener("keydown", keysP, false);
  var pausStatus = true;

    function keysP(e) {
        var keyCodeP = e.keyCode;
        if (keyCodeP == 80) {
        Paus();
      }
    }

    function Paus(){
      if(pausStatus){
        pausScreen.classList.add('active');
        pausStatus = false;
        t = 0;
      } else{
        pausScreen.classList.remove("active");
        pausStatus = true;
        t = 1;
      }
    }



  // Game Over
  var play = true;
  function gameOver(){
    gameOverScreen.classList.add('active');
    player.radius = 15;
    ball.x = canvasWidth/2;
    ball.y = canvasHeight - ball.radius - player.Height - player.Bottom;
    ball.dx = 0;
    ball.y = 0;
    mouse.x = canvasWidth/2;
    ball.holdBall = false;

    if(play == true){
      play = false;
    }
  }





// Red screen flash effect
function screenRed() {
    
    //Reset opacity to 80%
    var opac = 0.8;
    
    //create & run an interval loop with 10ms intervals. 
    var SR = setInterval(function() {
        redScreen.style.background = "rgba(255, 0, 0, " + opac + ")";
        opac -= 0.01;
    
        if (opac <= 0) {
            clearInterval(SR);
        }
    }, 10);
}









/* Draw on screen */

  // Lives
  function drawLife(){
    c.font = "12px 'Press Start 2P'";
    c.textAlign="left"; 
    c.fillStyle = "gold";
    c.fillText("Lives: "+ life, 150, canvasHeight-10);

    if(life <= 0){
      gameOver();
    }
  }
    function addLife(newLife){
      life += newLife;
    }
    function removeLife(newLife){
      life -= newLife;
    }



  // Score
  function drawScore(){
    c.font = "12px 'Press Start 2P'";
    c.textAlign="left";   
    c.fillStyle = "gold";
    c.fillText("Score: "+ totalScore, 10, canvasHeight-10);
    document.getElementById('gameover-score').innerHTML = totalScore;
    document.getElementById('gamewin-score').innerHTML = totalScore;
  }
    function addScore(newScore){
      totalScore += newScore;
    }
    function removeScore(newScore){
      totalScore -= newScore;
    }






/* Effects */

// Shake Screen
var shake = new screenshake();
function screenshake() {
    
    // Big shake    
    this.big = function() {
        var arrX = [6, -3, -5, 5, 3, -3, -2, 2, -2, 2, 1, 0];
        var arrY = [6, -3, 4, 5, -3, 3, 2, 3, -2, 1, -1, 0];
            
        for (var i = 0; i < arrX.length + 1; i++){
            (function(i) {
                setTimeout(function(){
                    canvas.style.transform = "translate(" + arrX[i] + "px, " + arrY[i] + "px)";
                }, 50 * i);
            })(i);
        }
    }

    // Small shake
    this.small = function() {
        var arrX = [1, -1, -2, 2, 0];
        var arrY = [1, -2, 0, 2, 0];
        var i = 0;
        
        var shaker = setInterval(function() {
            canvas.style.transform = "translate(" + arrX[i] + "px, " + arrY[i] + "px)";
            i++;
            
            if (i >= arrX.length) {
                clearInterval(shaker);
            }
        }, 30);
    }

}