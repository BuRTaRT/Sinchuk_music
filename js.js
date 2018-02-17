var songList1 = document.querySelectorAll(".song-list");
var songList2= document.querySelectorAll(".song-list2");
var imgBlock1 = document.querySelector(".img-block");
var progressLine1 = document.querySelector(".progress-line1");
var progress1 = document.querySelector(".progress1");
var songName1 = document.querySelector(".song-name");
var songName2 = document.querySelector(".song-name2");
var trackName1 = document.querySelectorAll(".track-name")
var progressLine1Width = getComputedStyle(progressLine1);
progressLine1Width = parseInt(progressLine1Width.width);
var playBtn = document.querySelector(".button");
var btnPrev = document.querySelector("#btn-prev");
var btnNext = document.querySelector("#btn-next");
var trackLength = document.querySelectorAll(".track-length")
var minutes = document.querySelector("#minutes1");
var seconds = document.querySelector("#seconds1");
var duration = document.querySelector("#duration1");
var duration2 = document.querySelector(".duration2");
var songUL1 = document.querySelector(".song-ul");
var songUL2 = document.querySelector(".song-ul2");
var audio1 = new Audio();
audio1.src = songList1[0].dataset.song;
var audio2=new Audio();
audio2.src=songList2[0].dataset.song


function watcherMinutesSeconds(duration,progressline,progress,minutes,seconds,audio) {
	setInterval(function () {
		var length = duration.innerHTML;
		var arr = length.split(":");
		length = +arr[0] * 60 + +arr[1];

		var x = progressLine1Width / length;
		progress1.style.width = (audio1.currentTime * x) + "px";
		progressLine1.onclick = function (e) {
			audio1.currentTime = e.offsetX / x;
		}

		minutes.textContent = "0" + Math.floor(audio1.currentTime / 60);

		if (seconds.textContent <= 9) {
			seconds.textContent = "0" + Math.floor(audio1.currentTime % 60);
		}
		if (seconds.textContent > 9) {
			seconds.textContent = Math.floor(audio1.currentTime % 60);
		}
	}, 500)
}

function btnPrevNext(oper) {
	playBtn.classList.remove("play");
	playBtn.classList.add("stop");

	for (let i = 0; i < songList1.length; i++) {
		if (songName1.innerHTML == songList1[i].dataset.songName) {
			if (i >= 0 && i < 10) {
				audio1.src = songList1[i + oper].dataset.song;
				imgBlock1.style.backgroundImage = "url(" + songList1[i + oper].dataset.img + ")";
				songName1.innerHTML = songList1[i + oper].dataset.songName;
				duration.innerHTML = songList1[i + oper].dataset.songLength;
				audio1.play();
				break;

			}
		}
	}
}


playBtn.onclick = function () {
	watcherMinutesSeconds();
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
	watcherMinutesSeconds();
	btnPrevNext(-1);



}

btnNext.onclick = function () {
	watcherMinutesSeconds();
	btnPrevNext(1);
}

//songList 1
songUL1.onclick = function (e) {
	watcherMinutesSeconds();
	var target = e.target;
	while (target != this) {
		if (target.tagName == "LI") {
			audio1.src = target.dataset.song;
			songName1.innerHTML = target.dataset.songName;
			duration.innerHTML = target.dataset.songLength;
			imgBlock1.style.backgroundImage = "url(" + target.dataset.img + ")";
		}
		target = target.parentNode;
	};

	audio1.play();
	playBtn.classList.remove("play");
	playBtn.classList.add("stop");


}
//songlist2
songUL2.onclick = function (e) {
	var target = e.target;
	while (target != this) {
		if (target.tagName == "LI") {
			audio2.src = target.dataset.song;
			songName2.innerHTML = target.dataset.songName2;
			duration.innerHTML = target.dataset.songLength;
		}
		target = target.parentNode;
	};

	audio2.play();
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
