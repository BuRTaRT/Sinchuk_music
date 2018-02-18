var songList1 = document.querySelectorAll(".song-list");
var songList2 = document.querySelectorAll(".song-list2");
var imgBlock1 = document.querySelector(".img-block");
var songName1 = document.querySelector("#song-name1");
var songName2 = document.querySelector("#song-name2");
var trackName1 = document.querySelectorAll(".track-name")
var progressLine1 = document.querySelector("#progress-line1");
var progressLine2 = document.querySelector("#progress-line2");
var progress1 = document.querySelector("#progress1");
var progress2 = document.querySelector("#progress2");
var playBtn1 = document.querySelector("#btn-play1");
var playBtn2 = document.querySelector("#btn-play2");
var btnPrev = document.querySelector("#btn-prev1");
var btnPrev2 = document.querySelector("#btn-prev2");
var btnNext = document.querySelector("#btn-next1");
var minutes1 = document.querySelector("#minutes1");
var seconds1 = document.querySelector("#seconds1");
var duration1 = document.querySelector("#duration1");
var duration2 = document.querySelector("#duration2");
var songUL1 = document.querySelector(".song-ul");
var songUL2 = document.querySelector(".song-ul2");
var audio1 = new Audio();
audio1.src = songList1[0].dataset.song;
var audio2 = new Audio();
audio2.src = songList2[0].dataset.song


function watcherMinutesSeconds(duration, progressLine, progress, audio, minutes, seconds) {
	var progressLineWidth = parseInt(getComputedStyle(progressLine).width);
	setInterval(function () {
		var length = duration.innerHTML;
		var arr = length.split(":");
		length = +arr[0] * 60 + +arr[1];
	

		var x = progressLineWidth / length;
		progress.style.width = (audio.currentTime * x) + "px";
		progressLineWidth.onclick = function (e) {
			audio.currentTime = e.offsetX / x;
		}
			progressLine.onclick = function (e) {
			audio.currentTime = e.offsetX / x;
		}

		minutes.textContent = "0" + Math.floor(audio.currentTime / 60);

		if (seconds.textContent <= 9) {
			seconds.textContent = "0" + Math.floor(audio.currentTime % 60);
		}
		if (seconds.textContent > 9) {
			seconds.textContent = Math.floor(audio.currentTime % 60);
		}
	}, 50)
}

function btnPrevNext(oper) {
	playBtn1.classList.remove("play");
	playBtn1.classList.add("stop");

	for (let i = 0; i < songList1.length; i++) {
		if (songName1.innerHTML == songList1[i].dataset.songName) {
			if (i >= 0 && i < 10) {
				audio1.src = songList1[i + oper].dataset.song;
				imgBlock1.style.backgroundImage = "url(" + songList1[i + oper].dataset.img + ")";
				songName1.innerHTML = songList1[i + oper].dataset.songName;
				duration1.innerHTML = songList1[i + oper].dataset.songLength;
				audio1.play();
				break;

			}
		}
	}
}


playBtn1.onclick = function () {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	this.classList.toggle("stop");
	this.classList.toggle("play");
	if (this.classList[1] == "stop") {
		audio1.play();
	}
	if (this.classList[1] == "play") {
		audio1.pause();
	}
	

};



btnPrev.onclick = function () {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	btnPrevNext(-1);
}
btnPrev2.onclick = function () {
	watcherMinutesSeconds(duration2, progressLine2, progress2, audio2, minutes2, seconds2);
	btnPrevNext(-1);
}


btnNext.onclick = function () {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	btnPrevNext(1);
}

//songList 1
songUL1.onclick = function (e) {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	var target = e.target;
	while (target != this) {
		if (target.tagName == "LI") {
			audio1.src = target.dataset.song;
			songName1.innerHTML = target.dataset.songName;
			duration1.innerHTML = target.dataset.songLength;
			imgBlock1.style.backgroundImage = "url(" + target.dataset.img + ")";
		}
		target = target.parentNode;
	};

	audio1.play();
	playBtn1.classList.remove("play");
	playBtn1.classList.add("stop");


}
//songlist2
songUL2.onclick = function (e) {
	watcherMinutesSeconds(duration2, progressLine2, progress2, audio2, minutes2, seconds2);
	var target = e.target;
	while (target != this) {
		if (target.tagName == "LI") {
			audio2.src = target.dataset.song;
			songName2.innerHTML = target.dataset.songName2;
			duration2.innerHTML = target.dataset.songLength;
		}
		target = target.parentNode;
	};

	audio2.play();
	playBtn2.classList.remove("play");
	playBtn2.classList.add("stop");
}

document.onclick = function (e) {
	var target = e.target;
	if (target.id == "btn-play2") {
		watcherMinutesSeconds(duration2, progressLine2, progress2, audio2, minutes2, seconds2);
		audio2.play();
		target.classList.toggle("stop");
		target.classList.toggle("play");
		if (target.classList[1] == "stop") {
			audio2.play();
		}
		if (target.classList[1] == "play") {
			audio2.pause();
		}


	} 
}

//animation!!!!!!
var subscr = document.querySelectorAll(".subscr-right");
var subscText = document.querySelectorAll(".subscr-text");
var vk = document.querySelectorAll(".vk");
var twitter = document.querySelectorAll(".twitter");
var face = document.querySelectorAll(".face");

for (let i = 0; i < subscr.length; i++) {
	subscr[i].onmouseover = function () {
		subscText[i].style.visibility = "hidden";
		vk[i].style.visibility = "visible";
		vk[i].style.animationName = "anim";
		twitter[i].style.visibility = "visible";
		twitter[i].style.animationName = "anim";
		face[i].style.visibility = "visible";
		face[i].style.animationName = "anim";
	}
	subscr[i].onmouseout = function () {
		subscText[i].style.visibility = "visible";
		vk[i].style.visibility = "hidden";
		vk[i].style.animationName = "";
		twitter[i].style.visibility = "hidden";
		twitter[i].style.animationName = "";
		face[i].style.visibility = "hidden";
		face[i].style.animationName = "";
	}


}
