// CANDLES TUNE
const keys = document.querySelectorAll("[data-note]");
keys.forEach((key) => {
	key.addEventListener("click", () => {
		playNote(key);
	});
});

function playNote(key) {
	const noteAudio = document.getElementById(key.dataset.note);
	noteAudio.currentTime = 0;
	noteAudio.play();
}

// STRIPES WRAP
const stripes = document.querySelectorAll("[data-note]");
stripes.forEach((stripe) => {
	stripe.addEventListener("click", () => {
		stripe.classList.add("stripesBuffer");
	});
});

// FLAMES APPEAR
const flameR = document.getElementsByTagName("section");
const flameO = document.querySelectorAll(".candlesBox section div");
document.getElementById("flameAppear").addEventListener("click", () => {
	appearFlame();
});

let iFlame = 0,
	jFlame = 0;
function appearFlame() {
	if (jFlame == 0) {
		document.getElementById("crackling").play();
		setInterval(() => {
			flameR[iFlame].style.borderBottomWidth = "var(--bBottom)";
			flameR[iFlame].style.borderLeftWidth = "var(--bLeft)";
			flameR[iFlame].style.borderRightWidth = "var(--bRight)";
			flameR[iFlame].style.borderTopWidth = "var(--bTop)";
			flameR[iFlame].style.boxShadow = "0vw 0vw 5vh 0.6vh #ffff00";
			flameR[iFlame].style.transition = "1.6s, ease-in, 400ms";
			setTimeout(() => {
				flameO[iFlame].style.borderTopWidth = "calc(var(--bTop)/1.5)";
				flameO[iFlame].style.borderRightWidth = "calc(var(--bRight)/1.5)";
				flameO[iFlame].style.borderLeftWidth = "calc(var(--bLeft)/1.5)";
				flameO[iFlame].style.borderBottomWidth = "calc(var(--bBottom)/1.5)";
				flameO[iFlame].style.transition = "1.6s, ease-in, 100ms";
				iFlame += 1;
				document.title = `[ ${iFlame} Candles ]`;
			}, 200);
		}, 350);
	}
	jFlame += 1;
}

// ARROW APPEAR
document.getElementById("flameAppear").addEventListener("click", () => {
	setTimeout(() => {
		document.getElementById("arrowBtn").style.visibility = "visible";
	}, 9000);
});

// INTRO TYPEWRITER & MASTER APPEAR
function introTypeWrite() {
	let introP = [
		"so this year I wanted to do something special for my decade-long (and 4-foot tall) friend.",
		"this is my very cheesy gift to you, all from me and from scratch.",
		"anyways, we have been to many places together. so let's go on another trip, shall we ?",
		"this time down memory lane . . ."
	];
	setTimeout(() => {
		let lines = document.querySelectorAll("#introOne p");
		let times = [0,5500,10000,16000];
		let k = 1;
		for (let i = 0; i < lines.length; i++) {
			setTimeout(() => {
				for (let j = 0; j < introP[i].length; j++) {
					setTimeout(() => {
						lines[i].innerHTML += introP[i][j];
						if (i == 2) {
							k = 2;
						}
					}, j * 55 * k); 
				}
			}, times[i]);
		}
	}, 3000); 
	let introC = "  [ oh and i'm in most of them bc if not, that'd be weird ]";
	setTimeout(() => {
		for (let m = 0; m < introC.length; m++) {
			setTimeout(() => {
				document.querySelector("#introTwo p").innerHTML += introC[m];
			}, m * 40);
		}
	}, 24000); 
	setTimeout(() => {
		let dots = ["#9ADED7", "#BDE7D9", "#D1ECDA", "#E5F1DB", "#F5F5DC"];
		for (let r = 0; r < dots.length; r++) {
			setTimeout(() => {
				document.querySelectorAll("#introTwo div")[r].style.backgroundColor = `${dots[r]}`;
				document.querySelectorAll("#introTwo div")[r].style.height = "4vh";
				document.querySelectorAll("#introTwo div")[r].style.transition = "1s, ease-in, 200ms";
			}, r * 500);
		}
	}, 26000);
	setTimeout(() => {
		document.getElementById("master").style.visibility = "visible";
		document.getElementById("bodyTwo").style.overflowY = "scroll";
		document.getElementById("still").play();
	}, 26000); 
}

// MEMORY LANE
function toggleYear(nth, w, h){
	let box = document.querySelectorAll(`.year:nth-child(${nth}) div`);
	box[0].style.width = `${w}vw`;
	box[0].classList.toggle("yearWings");
	box[0].style.fontSize = `${h}vw`;
	box[0].style.lineHeight = `${h+1}vw`;
	box[2].classList.toggle("yearWings");
} 

function M6(nth, w, h) {
	toggleYear(nth, w, h);
	document.getElementById("still").pause();
	document.getElementById("lover").play();
}

function btnEnd() {
	document.getElementById("btnEnd").style.backgroundColor = "#9bd3e6";
	let introP = [
		"may you live long, old person. and yes, i know i'm still older",
		"cheers to 10 years of friendship and 16 years of your life. cheers to your future", 
		"god bless, hope you're happy", 
		"-- andrew", 
		"~ happy birthday, kylie ~"
	];
	setTimeout(() => {
		let lines = document.querySelectorAll("#introThree p");
		let times = [0,4500,10000,13500,15000];
		let k = 1;
		for (let i = 0; i < lines.length; i++) {
			setTimeout(() => {
				for (let j = 0; j < introP[i].length; j++) {
					setTimeout(() => {
						window.scrollBy(0, window.innerHeight);
						lines[i].innerHTML += introP[i][j];
						if (i == 2) {
							k = 2;
						}
					}, j * 55 * k);
				}
			}, times[i]);
		}
	}, 2500)
}


