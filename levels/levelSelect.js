var levelSelect = [];
levelSelect.push(level1);
levelSelect.push(level2);


window.addEventListener("keydown", levelJump, false);
function levelJump(e) {
    var leveljump = e.keyCode;
    if (leveljump == 88) { // 88 = X
		levels++;
      console.log(levels);
        if (levels >= levelSelect.length) {
          levels = 0;
        }
	}
    if (leveljump == 90) { //90 = Z
      levels--;
      console.log(levels);
      if (levels < 0) {
        levels = 1;
      }
    }
}