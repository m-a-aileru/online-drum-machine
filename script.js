const sound = document.querySelectorAll("audio");

const kick = document.getElementById("kick");
const snare = document.getElementById("snare");
const highTom = document.getElementById("high-tom");
const midTom = document.getElementById("mid-tom");
const lowTom = document.getElementById("low-tom");
const hiHat = document.getElementById("hi-hat");
const ride = document.getElementById("ride");
const crash = document.getElementById("crash");
		
// Event Listeners		
document.addEventListener("keydown", inputReceipt);
//document.addEventListener("onmouseover", addHoverStyle);
		
function playSound(index) {
	sound[index].play();
}

// function playSound1() {
// 	sound[0].play();
// }
		
// function playSound2() {
// 	sound[1].play();
// }
		
// function playSound3() {
// 	sound[2].play();
// }
		
// function playSound4() {
// 	sound[3].play();
// }
		
// function playSound5() {
// 	sound[4].play();
// }
		
// function playSound6() {
// 	sound[5].play();
// }
		
function inputReceipt(event) {
	var evt = event.key;
		
	if (evt == "1") {	
		// the whole transition
		kick.style.transition = "all 0.25s";
		// increase in size by 10%
		kick.style.transform = "scale(1.1, 1.1)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		kick.style.boxShadow = "0 0 5px #ff9900";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad		
		kick.style.border = "3px solid #ff4000";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		kick.style.background = "#ffb366";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		kick.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		kick.style.color = "#ff4000";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(0); 
	}
	else if (evt == "2") { 
		// the whole transition
		snare.style.transition = "all 0.25s";
		// increase in size by 10%
		snare.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		snare.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		snare.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		snare.style.background = "#ffb366";
		kick.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		snare.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		snare.style.color = "#ff4000";
		kick.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(1); 
	}
	else if (evt == "3") { 
		// the whole transition
		highTom.style.transition = "all 0.25s";
		// increase in size by 10%
		highTom.style.transform = "scale(1.1, 1.1)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		highTom.style.boxShadow = "0 0 5px #ff9900";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		highTom.style.border = "3px solid #ff4000";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		highTom.style.background = "#ffb366";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		kick.style.background = "white";
		snare.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		highTom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		highTom.style.color = "#ff4000";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(2); 
	}
	else if (evt == "4") { 
		// the whole transition
		midTom.style.transition = "all 0.25s";
		// increase in size by 10%
		midTom.style.transform = "scale(1.1, 1.1)";
		highTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		midTom.style.boxShadow = "0 0 5px #ff9900";
		highTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		midTom.style.border = "3px solid #ff4000";
		highTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		midTom.style.background = "#ffb366";
		highTom.style.background = "white";
		lowTom.style.background = "white";
		kick.style.background = "white";
		snare.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		midTom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		midTom.style.color = "#ff4000";
		highTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(3); 
	}
	else if (evt == "5") { 
		// the whole transition
		lowTom.style.transition = "all 0.25s";
		// increase in size by 10%
		lowTom.style.transform = "scale(1.1, 1.1)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		lowTom.style.boxShadow = "0 0 5px #ff9900";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		lowTom.style.border = "3px solid #ff4000";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		lowTom.style.background = "#ffb366";
		highTom.style.background = "white";
		midTom.style.background = "white";
		kick.style.background = "white";
		snare.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		lowTom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		lowTom.style.color = "#ff4000";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(4); 
	}
	else if (evt == "6") {
		// the whole transition
		hiHat.style.transition = "all 0.25s"; 
		// increase in size by 10%
		hiHat.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		hiHat.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		hiHat.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		hiHat.style.background = "#ffb366";
		kick.style.background = "white";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		hiHat.style.textShadow = "0 0 3px #ffffff";
		// keypad text colour
		hiHat.style.color = "#ff4000";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		ride.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(5);
	}
	else if (evt == "7") { 
		// the whole transition
		ride.style.transition = "all 0.25s";
		// increase in size by 10%
		ride.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		ride.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		ride.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		ride.style.background = "#ffb366";
		kick.style.background = "white";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		ride.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		ride.style.color = "#ff4000";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(6); 
	}
	else if (evt == "8") { 
		// the whole transition
		crash.style.transition = "all 0.25s";
		// increase in size by 10%
		crash.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		crash.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		// border around keypad
		crash.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		// keypad background
		crash.style.background = "#ffb366";
		kick.style.background = "white";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		// glow around keypad text
		crash.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		crash.style.color = "#ff4000";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		// play corresponding drum sound
		playSound(7); 
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
		case hiHat:
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
	if (pad == kick) {	
		// the whole transition
		kick.style.transition = "all 0.25s";
		// increase in size by 10%
		kick.style.transform = "scale(1.1, 1.1)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		kick.style.boxShadow = "0 0 5px #ff9900";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad		
		kick.style.border = "3px solid #ff4000";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		kick.style.background = "#ffb366";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		kick.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		kick.style.color = "#ff4000";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(0); 
	}
	else if (pad == snare) { 
		// the whole transition
		snare.style.transition = "all 0.25s";
		// increase in size by 10%
		snare.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		snare.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		snare.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		snare.style.background = "#ffb366";
		kick.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		snare.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		snare.style.color = "#ff4000";
		kick.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(1); 
	}
	else if (pad == highTom) { 
		// the whole transition
		highTom.style.transition = "all 0.25s";
		// increase in size by 10%
		hightom.style.transform = "scale(1.1, 1.1)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		highTom.style.boxShadow = "0 0 5px #ff9900";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		highTom.style.border = "3px solid #ff4000";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		highTom.style.background = "#ffb366";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		kick.style.background = "white";
		snare.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		highTom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		highTom.style.color = "#ff4000";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(2); 
	}
	else if (pad == midTom) { 
		// the whole transition
		midTom.style.transition = "all 0.25s";
		// increase in size by 10%
		midtom.style.transform = "scale(1.1, 1.1)";
		highTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		midTom.style.boxShadow = "0 0 5px #ff9900";
		highTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		midTom.style.border = "3px solid #ff4000";
		highTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		midTom.style.background = "#ffb366";
		highTom.style.background = "white";
		lowTom.style.background = "white";
		kick.style.background = "white";
		snare.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		midTom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		midTom.style.color = "#ff4000";
		highTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(3); 
	}
	else if (pad == lowTom) { 
		// the whole transition
		lowTom.style.transition = "all 0.25s";
		// increase in size by 10%
		lowtom.style.transform = "scale(1.1, 1.1)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		midTom.style.boxShadow = "0 0 5px #ff9900";
		highTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		midTom.style.border = "3px solid #ff4000";
		highTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// key pad background
		midTom.style.background = "#ffb366";
		highTom.style.background = "white";
		lowTom.style.background = "white";
		kick.style.background = "white";
		snare.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		midTom.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		midTom.style.color = "#ff4000";
		highTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		hiHat.style.color = "#505050";
		ride.style.color = "#505050";
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(4); 
	}
	else if (pad == hiHat) {
		// the whole transition
		hiHat.style.transition = "all 0.25s"; 
		// increase in size by 10%
		hiHat.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		hiHat.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		hiHat.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		hiHat.style.background = "#ffb366";
		kick.style.background = "white";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		ride.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		hiHat.style.textShadow = "0 0 3px #ffffff";
		// keypad text colour
		hiHat.style.color = "#ff4000";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		ride.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(5);
	}
	else if (pad == ride) { 
		// the whole transition
		ride.style.transition = "all 0.25s";
		// increase in size by 10%
		ride.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		crash.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		ride.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		crash.style.boxShadow = "none";
		// border around keypad
		ride.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		crash.style.border = "3px solid #c0c0c0";
		// keypad background
		ride.style.background = "#ffb366";
		kick.style.background = "white";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		crash.style.background = "white";
		// glow around keypad text
		ride.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("crash").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		ride.style.color = "#ff4000";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color = "#505050";				
		crash.style.color = "#505050";
		// play corresponding drum sound
		playSound(6); 
	}
	else if (pad == crash) { 
		// the whole transition
		crash.style.transition = "all 0.25s";
		// increase in size by 10%
		crash.style.transform = "scale(1.1, 1.1)";
		kick.style.transform = "scale(1.0, 1.0)";
		snare.style.transform = "scale(1.0, 1.0)";
		highTom.style.transform = "scale(1.0, 1.0)";
		midTom.style.transform = "scale(1.0, 1.0)";
		lowTom.style.transform = "scale(1.0, 1.0)";
		hiHat.style.transform = "scale(1.0, 1.0)";
		ride.style.transform = "scale(1.0, 1.0)";
		// glow outside keypad
		crash.style.boxShadow = "0 0 5px #ff9900";
		kick.style.boxShadow = "none";
		snare.style.boxShadow = "none";
		highTom.style.boxShadow = "none";
		midTom.style.boxShadow = "none";
		lowTom.style.boxShadow = "none";
		hiHat.style.boxShadow = "none";
		ride.style.boxShadow = "none";
		// border around keypad
		crash.style.border = "3px solid #ff4000";
		kick.style.border = "3px solid #c0c0c0";
		snare.style.border = "3px solid #c0c0c0";
		highTom.style.border = "3px solid #c0c0c0";
		midTom.style.border = "3px solid #c0c0c0";
		lowTom.style.border = "3px solid #c0c0c0";
		hiHat.style.border = "3px solid #c0c0c0";
		ride.style.border = "3px solid #c0c0c0";
		// keypad background
		crash.style.background = "#ffb366";
		kick.style.background = "white";
		snare.style.background = "white";
		highTom.style.background = "white";
		midTom.style.background = "white";
		lowTom.style.background = "white";
		hiHat.style.background = "white";
		ride.style.background = "white";
		// glow around keypad text
		crash.style.textShadow = "0 0 3px #ffffff";
		/**
		document.getElementById("bass").style.textShadow = "0 0 3px #000000";
		document.getElementById("snare").style.textShadow = "0 0 3px #000000";
		document.getElementById("tom").style.textShadow = "0 0 3px #000000";
		document.getElementById("hiHat").style.textShadow = "0 0 3px #000000";
		document.getElementById("ride").style.textShadow = "0 0 3px #000000";
		*/
		// keypad text colour
		crash.style.color = "#ff4000";
		kick.style.color = "#505050";
		snare.style.color = "#505050";
		highTom.style.color = "#505050";
		midTom.style.color = "#505050";
		lowTom.style.color = "#505050";
		hiHat.style.color =           "#505050";
		ride.style.color = "#505050";
		// play corresponding drum sound
		playSound(7); 
	}		
}
