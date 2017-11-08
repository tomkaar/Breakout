//  Configuration

  // Canvas Basics
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    var canvasHeight = window.innerHeight;
    var canvasWidth = window.innerWidth;



  // Game Basics
    var t = 1;
    var life = 3;
    var totalScore = 0;

  // Player
    var player = {
      Height: 20,
      Width: 100,
      Bottom: 30, // How far from the bottom of the canvas the pad is located 
      mouseMovements: 0 // init Mouse Movement
    }

  // Ball
    var ball = {
      radius: 15,
      acceleration: 0.5,// add speed (pixels per frame)
      x: (canvasWidth/2), // Ball spawn x-axis
      y: (canvasHeight - 15 - player.Height - player.Bottom), // Ball spawn y-axis
      dx: -4, // Velocity, x-axis
      dy: -4, // Velocity, y-axis
      holdBall: true, // Start game by holding the ball
    }



