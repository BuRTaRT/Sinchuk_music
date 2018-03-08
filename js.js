//animation!!!!!! music
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
//AUDIO SCRIPTS
function watcherPause() {
	for (let i = 0; i < objArr.length; i++) {
		if (objArr[i] != this) objArr[i].pause();
	}
}

function watcherMinutesSecondsProgress(that) {
	var progressLineWidth = parseInt(getComputedStyle(that.progressline).width);
	clearInterval(that.timer);
	that.timer = setInterval(() => {
		var length = that.duration.innerHTML;
		var arr = length.split(":");
		length = +arr[0] * 60 + +arr[1];
		var x = progressLineWidth / length;
		that.progress.style.width = (that.audio.currentTime * x) + "px";
		that.progressline.onclick = (e) => {
			that.audio.currentTime = e.offsetX / x;
		}
		that.minutes.textContent = "0" + Math.floor(that.audio.currentTime / 60);
		if (that.seconds.textContent <= 9) {
			that.seconds.textContent = "0" + Math.floor(that.audio.currentTime % 60);
		}
		if (that.seconds.textContent > 9) {
			that.seconds.textContent = Math.floor(that.audio.currentTime % 60);
		}
	}, 100)
};

function watcherBtnPrevNext(that, oper) {
	for (let i = 0; i < that.songList.length; i++) {
		if (that.songName.textContent == that.songList[i].dataset.songName) {
			that.audio.src = that.songList[i + oper].dataset.song;
			that.songName.textContent = that.songList[i + oper].dataset.songName;
			that.audio.play();
			that.duration.innerHTML = that.songList[i + oper].dataset.songLength;
			break;
		}

	}
};

function btnToggler(that) {
	that.btnPlay.classList.toggle("play");
	that.btnPlay.classList.toggle("stop");
	if (that.btnPlay.classList[1] == "stop") that.play();
	if (that.btnPlay.classList[1] == "play") that.pause();

	let btns = document.querySelectorAll(".button");
	for (let i = 0; i < btns.length; i++) {
		if (btns[i] != that.btnPlay) {
			btns[i].classList.remove("stop");
			btns[i].classList.add("play");
		}
	}
}

function btnClasslistRemoverAdder(that) {
	that.btnPlay.classList.remove("play");
	that.btnPlay.classList.add("stop");

}

function AudioObjConsctructor(src, progressline, progress, songname, imgblock, btnplay, btnprev, btnnext, songul, duration, minutes, seconds, songlist) {
	this.audio = new Audio();
	this.audio.src = src;
	this.pause = () => {
		this.audio.pause();
	}
	this.play = () => {
		this.audio.play();
	};
	this.progressline = progressline;
	this.progress = progress;
	this.duration = duration
	this.minutes = minutes;
	this.seconds = seconds;
	this.songName = songname;
	this.songList = songlist;
	this.imgBlock = imgblock;
	this.btnPlay = btnplay;
	this.btnPrev = btnprev;
	this.btnNext = btnnext;
	this.songUL = songul;
	var timer;
	this.btnPrev.onclick = () => {
		watcherBtnPrevNext(this, -1);
		watcherMinutesSecondsProgress(this);
		btnClasslistRemoverAdder(this);

	}
	this.btnNext.onclick = () => {
		watcherBtnPrevNext(this, 1);
		watcherMinutesSecondsProgress(this);
		btnClasslistRemoverAdder(this);

	}
	this.progressline.onclick = () => {
		watcherMinutesSecondsProgress(this);
	}
	this.btnPlay.onclick = () => {
		watcherMinutesSecondsProgress(this);
		watcherPause();
		btnToggler(this);
	};
	this.songUL.onclick = (e) => {
		watcherMinutesSecondsProgress(this);
		watcherPause();
		let target = e.target;
		while (target != this) {
			if (target.tagName == "LI") {
				btnToggler(this);
				btnClasslistRemoverAdder(this);
				this.songName.textContent = target.dataset.songName;
				this.duration.innerHTML = target.dataset.songLength;
				this.audio.src = target.dataset.song;
				if (target.dataset.img) {
					imgblock.style.backgroundImage = "url(" + target.dataset.img + ")"
				};
				this.play();

				break;
			}
			target = target.parentNode;
		}
	}
};

var songArr = ["music/heart/song0.mp3", "music/coverman/song0.mp3", "music/Slava Sinchuk/song0.mp3", "music/A history/song0.mp3", "music/Tell me why/song0.mp3"];
var objArr =[];
for (var i = 1; i <= 5; i++) {
	objArr.push(window["audioObj" + i] = new AudioObjConsctructor(songArr[i-1], document.querySelector("#progress-line" + i), document.querySelector("#progress" + i), document.querySelector("#song-name" + i), document.querySelector("#img-block" + i), document.querySelector("#btn-play" + i), document.querySelector("#btn-prev" + i), document.querySelector("#btn-next" + i), document.querySelector("#song-ul" + i), document.querySelector("#duration" + i), document.querySelector("#minutes" + i), document.querySelector("#seconds" + i), document.querySelectorAll(".song-list" + i)))

};

