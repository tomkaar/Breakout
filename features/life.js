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
  sounds.explosionNoRinging();
}