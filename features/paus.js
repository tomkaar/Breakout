window.addEventListener("keydown", keysP, true);
var pausStatus = true;

function keysP(e) {
    var keyCodeP = e.keyCode;
    if (keyCodeP == 80) {
		Paus();
	}
}

function Paus(){
	if(pausStatus){
		document.getElementById("pausscreen").classList.add('active');
		pausStatus = false;
		t = 0;
	} else{
		document.querySelector("#pausscreen").classList.remove("active");
		pausStatus = true;
		t = 1;
	}
}