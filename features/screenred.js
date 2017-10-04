// Red screen effect when losing a life
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