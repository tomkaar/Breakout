//  Configuration

  // Canvas Basics
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    var canvasHeight = window.innerHeight;
    var canvasWidth = window.innerWidth;

  // Game Basics
    var t = 1; // Time, the speed
    var life = 3; // Life, here you can set the start life
    var totalScore = 0;
    var currentLevel = 0;

  // Tiles Basics
    var brickRow = 11;
    var brickCol = 10;
    var brickPaddingX = 20;
    var brickPaddingY = 10;
    var brickWidth = (canvasWidth/brickRow) - brickPaddingX - brickPaddingX/brickRow;
    var brickHeight = 25;

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
