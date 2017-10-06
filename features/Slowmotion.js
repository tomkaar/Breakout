// Add Eventlister
window.addEventListener("keydown", keys, true);
window.addEventListener("keyup", keysup, false);

var smt = slowMoTime;
var cooldown = 10;
var slowLoop;
var rechargeMeter = 125;

// On button press = drain slowmotion meter from 3 to 0. if 0 = start 10s cooldown
function keys(e) {
  var keyCode = e.keyCode;
  
  if (keyCode == 32 || keyCode == 17) {
    if (cooldown >= 10) {
      t = 0.1;
      rechargeMeter -= slowMoTime;
      
      setTimeout(function() {
        smt -= 1;
      }, 1000);
      
      if (smt <= 0) {
        cooldownFunc();
      }
      
      console.log("smt: " + smt);
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
      if (smt >= slowMoTime) {
        clearInterval(cdLoop);
      }
    }, 1000);
  }
}

// Cooldown function. Lasts 10 seconds. Replenishes cooldown and smt.
function cooldownFunc() {
  clearInterval(slowLoop);
  t = 1;
  cooldown = 0;
  rechargeMeter = 0;
  
  let cdLoop2 = setInterval(function() {
    rechargeMeter++; 
    //console.log("recharge: " + (rechargeMeter % 10+1));
    if(rechargeMeter%12 == 11) {
      cooldown++;
      console.log("cooldown: " + cooldown);
      
      if (cooldown >= 10) {
        cooldown == 10;
      }
    }
    if (rechargeMeter >= 125) {
        rechargeMeter == 125;
        smt = slowMoTime;
        clearInterval(cdLoop2);
    }
  }, 100);
  /*
  let cdLoop = setInterval(function() {
    console.log("cooldown: " + cooldown);
    
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
  }, 1000);*/
}

function drawSlomo() {
  c.font = "12px 'Press Start 2P'";
  c.textAlign="left"; 
  c.fillStyle = "gold";
  c.fillText("Bullet-time: ", 300, canvasHeight-10);
  
  c.beginPath();
  c.rect(450, canvasHeight-22, rechargeMeter, 10);
  if (rechargeMeter == 125) {
    c.fillStyle = 'green';
  }
  else {
    c.fillStyle = 'white';
  }
  c.fill();
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