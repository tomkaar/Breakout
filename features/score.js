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