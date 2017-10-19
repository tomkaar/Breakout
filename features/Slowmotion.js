// Add Eventlister
window.addEventListener("keydown", keys, true);
window.addEventListener("keyup", keysup, false);

var cooldown = false;

// On button press = drain slowmotion meter from 3 to 0. if 0 = start 10s cooldown
function keys(e) {
  var keyCode = e.keyCode;
  if (keyCode == 32 || keyCode == 17) {
    if (!cooldown) {
      t = 0.1;
      smt -= 0.1;
      
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
      
      if (smt < slowMoTime && !cooldown) {
        let cdLoop = setInterval(function() {
          smt += 0.1;
          
          if (smt >= slowMoTime) {
            smt = slowMoTime;
            clearInterval(cdLoop);
          }
        }, 400);
      }
      else {
        return;
      }
  }
}

// if bullet-time is depleted = recharge it completely before making it available again
function cooldownFunc() {
  t = 1;
  cooldown = true;
  
  let cdLoop = setInterval(function() {
    if (smt < slowMoTime) {
      smt += 0.1;
      console.log("smt cooldown: " + smt);
    }
    if (smt >= slowMoTime) {
      smt = slowMoTime;
      cooldown = false;
      clearInterval(cdLoop);
    }
  }, 200);
}

function drawSlomo() {
  c.font = "12px 'Press Start 2P'";
  c.textAlign="left"; 
  c.fillStyle = "gold";
  c.fillText("Bullet-time: ", 270, canvasHeight-10);
  
  c.beginPath();
  c.rect(420, canvasHeight-22, (smt * 40), 10);
  if (smt*40 == slowMoTime * 40) {
    c.fillStyle = 'green';
  }
  else if (cooldown) {
    c.fillStyle = 'red';
  }
  else {
    c.fillStyle = 'white';
  }
  c.fill();
  
  
  c.beginPath();
  c.lineWidth = "2";
  c.strokeStyle = "white";
  c.rect(420, canvasHeight-22, 121, 11);
  c.stroke();
  
  c.closePath();
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