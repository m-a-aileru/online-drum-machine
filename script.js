var sound = document.querySelectorAll("audio");

var bass = document.getElementById("bass");
var snare = document.getElementById("snare");
var tom = document.getElementById("tom");
var hihat = document.getElementById("hihat");
var ride = document.getElementById("ride");
var crash = document.getElementById("crash");
		
// Event Listeners		
document.addEventListener("keydown", inputReceipt);
//document.addEventListener("onmouseover", addHoverStyle);
		
function playSound1() {
	sound[0].play();
}
		
function playSound2() {
	sound[1].play();
}
		
function playSound3() {
	sound[2].play();
}
		
function playSound4() {
	sound[3].play();
}
		
function playSound5() {
	sound[4].play();
}
		
function playSound6() {
	sound[5].play();
}
		
function inputReceipt(event) {
	var evt = event.key;
		
	if (evt == "1") {	
		// the whole transition
		bass.style.transition = "all 0.25s";
		// increase in size by 10%
		bass.style.transform = "scale(1.1, 1.1)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		bass.style.boxShadow = "0 0 5px #ff9900";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad		
		bass.style.border = "3px solid #ff4000";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		bass.style.background = "#ffb366";
		snare.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		bass.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		bass.style.color = "#ff4000";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound1(); 
	}
	else if (evt == "2") { 
		// the whole transition
		snare.style.transition = "all 0.25s";
		// increase in size by 10%
		snare.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		snare.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		snare.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		snare.style.background = "#ffb366";
		bass.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		snare.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		snare.style.color = "#ff4000";
		bass.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound2(); 
	}
	else if (evt == "3") { 
		// the whole transition
		tom.style.transition = "all 0.25s";
		// increase in size by 10%
		tom.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		tom.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		tom.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		tom.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		tom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		tom.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		hihat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound3(); 
	}
	else if (evt == "4") {
		// the whole transition
		hihat.style.transition = "all 0.25s"; 
		// increase in size by 10%
		hihat.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		hihat.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		hihat.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		hihat.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		tom.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		hihat.style.textShadow = "0 0 3px #ffffff";
		// keypad text colour
		hihat.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		ride.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound4();
	}
	else if (evt == "5") { 
		// the whole transition
		ride.style.transition = "all 0.25s";
		// increase in size by 10%
		ride.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		ride.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		ride.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		ride.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		ride.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		ride.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound5(); 
	}
	else if (evt == "6") { 
		// the whole transition
		crash.style.transition = "all 0.25s";
		// increase in size by 10%
		crash.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		crash.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		// border around keypad
		crash.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		// keypad background
		crash.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		// glow around keypad text
		crash.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		crash.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color =           "#505050";
		ride.style.color = "#505050";
		// play corresponding drum sound
		playSound6(); 
	}
}

function addHoverStyle(x) {	
	x.style.transition = "all 0.5s";
	x.style.border = "3px solid #cc7a00";
	x.style.color = "#cc7a00";
	x.style.background = "#fff766";
}

function removeHoverStyle(x) {
	x.style.transition = "all 1s";
	x.style.border = "3px solid #787878";
	x.style.color = "#505050";
	x.style.background = "#e6e6e6";
}
// TODO
function clickAnimation(pad) {
	/**
	switch (pad) {
		case bass:
			// play corresponding drum sound
			playSound1(); 
		case snare:
			playSound2(); 
		case tom:
			playSound3(); 
		case hihat:
			playSound4(); 
		case ride:
			playSound5(); 
		case crash:
			playSound6();
		default {
			playSound1();
		}
	}
	*/
	if (pad == bass) {	
		// the whole transition
		bass.style.transition = "all 0.25s";
		// increase in size by 10%
		bass.style.transform = "scale(1.1, 1.1)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		bass.style.boxShadow = "0 0 5px #ff9900";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad		
		bass.style.border = "3px solid #ff4000";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		bass.style.background = "#ffb366";
		snare.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		bass.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		bass.style.color = "#ff4000";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound1(); 
	}
	else if (pad == snare) { 
		// the whole transition
		snare.style.transition = "all 0.25s";
		// increase in size by 10%
		snare.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		snare.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		snare.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		snare.style.background = "#ffb366";
		bass.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		snare.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		snare.style.color = "#ff4000";
		bass.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound2(); 
	}
	else if (pad == tom) { 
		// the whole transition
		tom.style.transition = "all 0.25s";
		// increase in size by 10%
		tom.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		tom.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		tom.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		tom.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		tom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		tom.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		hihat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound3(); 
	}
	else if (pad == hihat) {
		// the whole transition
		hihat.style.transition = "all 0.25s"; 
		// increase in size by 10%
		hihat.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		hihat.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		hihat.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		hihat.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		tom.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		hihat.style.textShadow = "0 0 3px #ffffff";
		// keypad text colour
		hihat.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		ride.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound4();
	}
	else if (pad == ride) { 
		// the whole transition
		ride.style.transition = "all 0.25s";
		// increase in size by 10%
		ride.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		ride.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		ride.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		ride.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		ride.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		ride.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound5(); 
	}
	else if (pad == crash) { 
		// the whole transition
		crash.style.transition = "all 0.25s";
		// increase in size by 10%
		crash.style.transform = "scale(1.1, 1.1)";
		bass.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		tom.style.transform = "scale(1.0, 1.0)";
		hihat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		crash.style.boxShadow = "0 0 5px #ff9900";
		bass.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		tom.style.boxShadow = "none";
		hihat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		// border around keypad
		crash.style.border = "3px solid #ff4000";
		bass.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		tom.style.border = "3px solid #c0c0c0";
		hihat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		// keypad background
		crash.style.background = "#ffb366";
		bass.style.background = "white";
		snare.style.background = "white";
		tom.style.background = "white";
		hihat.style.background = "white";
		ride.style.background = "white";
		// glow around keypad text
		crash.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hihat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		crash.style.color = "#ff4000";
		bass.style.color = "#505050";
		snare.style.color = "#505050";
		tom.style.color = "#505050";
		hihat.style.color =           "#505050";
		ride.style.color = "#505050";
		// play corresponding drum sound
		playSound6(); 
	}		
}
