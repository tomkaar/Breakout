/*
// Add event listeners
window.addEventListener("keydown", keys, true);
window.addEventListener("keyup", keysy, true);

// Slow down game while holding CTRL
function keys(e) {
    var keyCode = e.keyCode;
    if (keyCode == 17) {
        if (intervall < 71) {
            intervall += 10;
        }
        else {
            intervall = 71;
        }
    }
}

// Speed up when releasing CTRL
function keysy(e) {
    var KeyCode = e.keyCode;
    if (KeyCode == 17) {
        setTimeout(speedup, 100);
    }
}

// Need this function for setTimeout else the ball will shoot like a bullet
function speedup() {
    while (intervall > 1) {
        intervall--;
    }
}
*/

// Add Eventlister
window.addEventListener("keydown", keys, true);

var smt = slowMoTime;

function keys(e) {
    var keyCode = e.keyCode;
    if (keyCode == 32) {
        if (t > 0.1) {
            t = 0.1;
            var sCD = setInterval(function() {
                smt--;
                console.log(smt);
                if(smt <= 0) {
                    t = 1;
                    clearInterval(sCD);
                }
            }, 1000);
            smt = slowMoTime;
        }
        else {
            t = 1;
            smt = slowMoTime;
        }
        
    }
}

// expl.
// In the canvas.js file I decalared a variable called t (short for time)
// This variable is set to 1
// To every object that's suppose to move I added t*X

// This way we can control the speed of every moving object on screen
// by changing the number inside the t variable

// 1 = normal speed
// <1 = slower
// >1 = faster

// 1*4 = 4
// 1*-4 = -4
// 0.1*4 = 0.4
// 0.1*-4 = -0.4

// In the function above you change the number when pressing space
// after the countdown is over the time and speed is reset