// Add Eventlister
window.addEventListener("keydown", keys, true);
window.addEventListener("keyup", keysup, false);

var smt = slowMoTime;
var cooldown = 10;

// On button press = drain slowmotion meter from 3 to 0. if 0 = start 10s cooldown
function keys(e) {
    var keyCode = e.keyCode;
    if (keyCode == 32 || keyCode == 17) {
        if (cooldown >= 10) {
            t -= 0.1;
            smt -= 0.1;
            
            if (t <= 0.1) {
                t = 0.1;
            }
            
            if (smt <= 0) {
                cooldownFunc();
            }
        }
    }
}


// On button release = recharge smt back to 3
function keysup(e) {
    var keyCode = e.keyCode;
    if (keyCode == 32 || keyCode == 17) {
        t = 1;
        
        let cdLoop = setInterval(function() {
            if (smt < slowMoTime) {
                smt++;
            }
            else if (smt >= slowMoTime) {
                clearInterval(cdLoop);
            }
        }, 1000);
    }
}

// Cooldown function. Lasts 10 seconds. Replenishes cooldown and smt.
function cooldownFunc() {
    t = 1;
    cooldown = 0;
    
    let cdLoop = setInterval(function() {
        if (cooldown < 10) {
            cooldown++;
            smt++;
            if (smt => slowMoTime) {
                smt = slowMoTime;
            }
        }
        else if (cooldown >= 10) {
            clearInterval(cdLoop);
        }
    }, 1000);
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