// Screen Shake
  // Just make sure the last number in the array is 0
  // so when the shake is over the screen will be back at 0
function screenshake() {
  var arrX = [1, -1, -2, 2, 1, -1, -2, 2, -1, 1, 1, 0];
  var arrY = [1, -2, 0, 2, -1, 2, 1, 1, -1, 2, -2, 0];

    
    /*
    //Metod 1
  for (var i = 0; i < arrX.length + 1; i++){
   (function(i) {
      setTimeout(function(){
        canvas.style.transform = "translate(" + arrX[i] + "px, " + arrY[i] + "px)";
      }, 50 * i);
    })(i);
  }*/
    
    //Metod 2
    var i = 0;
    
    var shaker = setInterval(function() {
        canvas.style.transform = "translate(" + arrX[i] + "px, " + arrY[i] + "px)";
        i++;
        
        if (i >= arrX.length) {
            clearInterval(shaker);
        }
    }, 30);
}
