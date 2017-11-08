var sound = new Sounds();

function Sounds() {

	// Glitter
	this.glitter = function(){
		glitter = document.createElement('audio');
		glitter.setAttribute('src', 'game/sounds/glitter01.mp3');
		glitter.play();
	}
	this.glitter02 = function(){
		glitter02 = document.createElement('audio');
		glitter02.setAttribute('src', 'game/sounds/glitter02.mp3');
		glitter02.play();
	}
	this.glitter03 = function(){
		glitter03 = document.createElement('audio');
		glitter03.setAttribute('src', 'game/sounds/glitter03.mp3');
		glitter03.play();
	}

	// Shimmer
	this.Shimmer = function(){
		shimmer = document.createElement('audio');
		shimmer.setAttribute('src', 'game/sounds/shimmer.mp3');
		shimmer.play();
	}
	this.Shimmer02 = function(){
		shimmer02 = document.createElement('audio');
		shimmer02.setAttribute('src', 'game/sounds/shimmer02.mp3');
		shimmer02.play();
	}
	this.Shimmer03 = function(){
		shimmer03 = document.createElement('audio');
		shimmer03.setAttribute('src', 'game/sounds/shimmer03.mp3');
		shimmer03.play();
	}

	// Hit
	this.hitheavy = function(){
		hitheavy = document.createElement('audio');
		hitheavy.setAttribute('src', 'game/sounds/hit-heavy.mp3');
		hitheavy.play();
	}
	this.hitmedium = function(){
		hitmedium = document.createElement('audio');
		hitmedium.setAttribute('src', 'game/sounds/hit-medium.mp3');
		hitmedium.play();
	}
	this.hitlight = function(){
		hitlight = document.createElement('audio');
		hitlight.setAttribute('src', 'game/sounds/hit-light.mp3');
		hitlight.play();
	}

	// sadJingle
	this.sadJingleBitcrush = function(){
		sadJingleBitcrush = document.createElement('audio');
		sadJingleBitcrush.setAttribute('src', 'game/sounds/sadJingle-bitcrush.mp3');
		sadJingleBitcrush.play();
	}
	this.sadJingleNormal = function(){
		sadJingleNormal = document.createElement('audio');
		sadJingleNormal.setAttribute('src', 'game/sounds/sadJingle-normal.mp3');
		sadJingleNormal.play();
	}

	// scifiJingle
	this.scifiJingle = function(){
		scifiJingle = document.createElement('audio');
		scifiJingle.setAttribute('src', 'game/sounds/scifiJingle.mp3');
		//scifiJingle.play();
	}

	// Explosion
	this.explosionSmall = function(){
		explosionSmall = document.createElement('audio');
		explosionSmall.setAttribute('src', 'game/sounds/explosion-small.mp3');
		explosionSmall.play();
	}
	this.explosionNoRinging = function(){
		explosionNoRinging = document.createElement('audio');
		explosionNoRinging.setAttribute('src', 'game/sounds/explosion-noRinging.mp3');
		explosionNoRinging.play();
	}
	this.explosionRinging = function(){
		explosionRinging = document.createElement('audio');
		explosionRinging.setAttribute('src', 'game/sounds/explosion-ringing.mp3');
		explosionRinging.play();
	}
	this.explosionSmallNoBass = function(){
		explosionSmallNoBass = document.createElement('audio');
		explosionSmallNoBass.setAttribute('src', 'game/sounds/explosion-small-noBass.mp3');
		explosionSmallNoBass.play();
	}
	this.explosionSmallNoKick = function(){
		explosionSmallNoKick = document.createElement('audio');
		explosionSmallNoKick.setAttribute('src', 'game/sounds/explosion-small-noKick.mp3');
		explosionSmallNoKick.play();
	}
}