

// Idea
// Count all the objects drawn on screen. (addToObjectCount -> TotalObjectCount)
// Add 1 to the counter everytime the ball hits a brick. (CurrentObjectCount)
// When the CurrentObjectCount = TotalObjectCount there should be no more bricks on screen and you've won.


var tc = 0; // init Total Count
var cc = 0; // init Current Blocks Hit Count

function addToObjectCount(c){
	TotalObjectCount(c);
}
// How many bricks was drawn on the canvas from the beginning
function TotalObjectCount(count){
	tc += count;
}

// Everytimes you hit a brick
function addToCurrentObjectCounter(c){
	CurrentObjectCount(c);
}

// How many bricks you've hit (total)
function CurrentObjectCount(count){
	cc += count;
	// If the current hit count is equal or more then the amount of drawn bricks. (total count)
	if(cc >= tc){
		win();
	}
}

// When the win(); function is called
function win(){
	document.getElementById("winscreen").classList.add('active');
	t = 0; // Stop the time
	holdBall = true;
	shake.big();
}