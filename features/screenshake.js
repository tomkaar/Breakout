// Screen Shake
  // Just make sure the last number in the array is 0
  // so when the shake is over the screen will be back at 0

var shake = new screenshake();

function screenshake() {
    
// for big shakes. ;)    
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

// For small shakes
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



} //End function