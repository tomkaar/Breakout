// Add event listeners
window.addEventListener("keydown", keys, true);
window.addEventListener("keyup", keysy, true);


var dxPlaceholder = dx;
var dyPlaceholder = dy;

// Slow down game while holding CTRL
function keys(e) {
    var keyCode = e.keyCode;
    if (keyCode == 17) {
        
        if (dx < 0 && dy < 0) {
            dx += 0.2;
            dy += 0.2;
            if (dx >= -0.5) { //Max threshold
                dx = -0.5;
            }
            if (dy >= -0.5) { //Max threshold
                dy = -0.5;
            }
        }
        
        if (dx > 0 && dy > 0) {
            dx -= 0.2;
            dy -= 0.2;
            if (dx <= 0.5) { //Max threshold
                dx = 0.5;
            }
            if (dy <= 0.5) { //Max threshold
                dy = 0.5;
            }
        }
        
        if (dx < 0 && dy > 0) {
            dx += 0.2;
            dy -= 0.2;
            if (dx >= -0.5) { //Max threshold
                dx = 0.5;
            }
            if (dy <= 0.5) { //Max threshold
                dy = 0.5;
            }
        }   
        
        if (dx > 0 && dy < 0) {
            dx -= 0.2;
            dy += 0.2;
            if (dx <= 0.5) { //Max threshold
                dx = 0.5;
            }
            if (dy >= -0.5) { //Max threshold
                dy = -0.5;
            }
        }
    }
}


// Speed up when releasing CTRL
function keysy(e) {
    var KeyCode = e.keyCode;
    if (KeyCode == 17) {
        speedup();
    }
}

// Need this function for setTimeout else the ball will shoot like a bullet
function speedup() {
    while (dx < dxPlaceholder) {
        dx++;
    }
    while (dy < dyPlaceholder) {
        dy++;
    }
    while (dx > dxPlaceholder) {
        dx--;
    }
    while (dy > dyPlaceholder) {
        dy--;
    }
}