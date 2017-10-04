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