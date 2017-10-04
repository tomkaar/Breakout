// Score
function drawScore(){
  c.font = "16px Arial";
  c.fillStyle = "gold";
  c.fillText("Score: "+ totalScore, 10, canvasHeight-10);
  document.getElementById('gameover-score').innerHTML = totalScore;
}
function addScore(newScore){
  totalScore += newScore;
}
function removeScore(newScore){
  totalScore -= newScore;
}