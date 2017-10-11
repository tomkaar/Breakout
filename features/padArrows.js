var leftKeyPressed = false;
var rightKeyPressed = false;

window.addEventListener("keydown", keyArrowDown, false);
function keyArrowDown(e) {
    let key = e.keyCode;
    if (key == 37) { // 37 = Left Arrow
      leftKeyPressed = true;
      KeysPressed()
	}
    if (key == 39) { // 39 = Right Arrow
      rightKeyPressed = true;
      KeysPressed()
    }
}

window.addEventListener("keyup", keyArrowUp, false);
function keyArrowUp(e) {
    let keyUp = e.keyCode;
    if (keyUp == 37) { // 37 = Left Arrow
      leftKeyPressed = false;
      KeysPressed()
  }
    if (keyUp == 39) { // 39 = Right Arrow
      rightKeyPressed = false;
      KeysPressed()
    }
}





function KeysPressed(){
  if(leftKeyPressed == true){
    console.log("Left Key Pressed!");
      mouse.x -= padWidth/2; 

  }
  if(rightKeyPressed == true){
    console.log("Right Key Pressed!");
    mouse.x += padWidth/2;
  }
}