var songList1 = document.querySelectorAll(".song-list");
var songList2 = document.querySelectorAll(".song-list2");
var songList3 = document.querySelectorAll(".song-list3");
var songList4 = document.querySelectorAll(".song-list4");
var songList5 = document.querySelectorAll(".song-list5");
var imgBlock1 = document.querySelector("#img-block1");
var imgBlock2 = document.querySelector("#img-block2");
var imgBlock3 = document.querySelector("#img-block3");
var imgBlock4 = document.querySelector("#img-block4");
var imgBlock5 = document.querySelector("#img-block5");
var songName1 = document.querySelector("#song-name1");
var songName2 = document.querySelector("#song-name2");
var songName3 = document.querySelector("#song-name3");
var songName4 = document.querySelector("#song-name4");
var songName5 = document.querySelector("#song-name5");
var progressLine1 = document.querySelector("#progress-line1");
var progressLine2 = document.querySelector("#progress-line2");
var progressLine3 = document.querySelector("#progress-line3");
var progressLine4 = document.querySelector("#progress-line4");
var progressLine5 = document.querySelector("#progress-line5");
var progress1 = document.querySelector("#progress1");
var progress2 = document.querySelector("#progress2");
var progress3 = document.querySelector("#progress3");
var progress4 = document.querySelector("#progress4");
var progress5 = document.querySelector("#progress5");
var playBtn1 = document.querySelector("#btn-play1");
var playBtn2 = document.querySelector("#btn-play2");
var playBtn3 = document.querySelector("#btn-play3");
var playBtn4 = document.querySelector("#btn-play4");
var playBtn5 = document.querySelector("#btn-play5");
var btnPrev1 = document.querySelector("#btn-prev1");
var btnPrev2 = document.querySelector("#btn-prev2");
var btnPrev3 = document.querySelector("#btn-prev3");
var btnPrev4 = document.querySelector("#btn-prev4");
var btnPrev5 = document.querySelector("#btn-prev5");
var btnNext1 = document.querySelector("#btn-next1");
var btnNext2 = document.querySelector("#btn-next2");
var btnNext3 = document.querySelector("#btn-next3");
var btnNext4 = document.querySelector("#btn-next4");
var btnNext5 = document.querySelector("#btn-next5");
var minutes1 = document.querySelector("#minutes1");
var minutes2 = document.querySelector("#minutes2");
var minutes3 = document.querySelector("#minutes3");
var minutes4 = document.querySelector("#minutes4");
var minutes5 = document.querySelector("#minutes5");
var seconds1 = document.querySelector("#seconds1");
var seconds2 = document.querySelector("#seconds2");
var seconds3 = document.querySelector("#seconds3");
var seconds4 = document.querySelector("#seconds4");
var seconds5 = document.querySelector("#seconds5");
var duration1 = document.querySelector("#duration1");
var duration2 = document.querySelector("#duration2");
var duration3 = document.querySelector("#duration3");
var duration4 = document.querySelector("#duration4");
var duration5 = document.querySelector("#duration5");
var songUL1 = document.querySelector("#song-ul1");
var songUL2 = document.querySelector("#song-ul2");
var songUL3 = document.querySelector("#song-ul3");
var songUL4 = document.querySelector("#song-ul4");
var songUL5 = document.querySelector("#song-ul5");


var target;
var timer;
var audio1 = new Audio();
audio1.src = songList1[0].dataset.song;
var audio2 = new Audio();
audio2.src = songList2[0].dataset.song;
var audio3 = new Audio();
audio3.src = songList3[0].dataset.song;
var audio4 = new Audio();
audio4.src = songList4[0].dataset.song;
console.log(audio4.src);
var audio5 = new Audio();
audio5.src = songList5[0].dataset.song;

function watcherMinutesSeconds(duration, progressLine, progress, audioObj, minutes, seconds) {
	var progressLineWidth = parseInt(getComputedStyle(progressLine).width);
	clearInterval(timer);
	timer = setInterval(function () {
		var length = duration.innerHTML;
		var arr = length.split(":");
		length = +arr[0] * 60 + +arr[1];
		var x = progressLineWidth / length;
		progress.style.width = (audioObj.currentTime * x) + "px";
		progressLine.onclick = function (e) {
			audioObj.currentTime = e.offsetX / x;
		}
		minutes.textContent = "0" + Math.floor(audioObj.currentTime / 60);
		if (seconds.textContent <= 9) {
			seconds.textContent = "0" + Math.floor(audioObj.currentTime % 60);
		}
		if (seconds.textContent > 9) {
			seconds.textContent = Math.floor(audioObj.currentTime % 60);
		}
	}, 100)
}

function btnPrevNext(btn, btn1, btn2, btn3, btn4, oper, songname, songlist, imgblock, duration, audioObj, audioObj1, audioObj2, audioObj3, audioObj4) {
	btn.classList.remove("play");
	btn.classList.add("stop");

	for (let i = 0; i < songlist.length; i++) {
		if (songname.innerHTML == songlist[i].dataset.songName) {
			if (i >= 0 || i <= songlist.length) {
				audioObj.src = songlist[i + oper].dataset.song;
				if (songlist[i].dataset.img) {
					imgblock.style.backgroundImage = "url(" + songlist[i + oper].dataset.img + ")";
				};
				songname.innerHTML = songlist[i + oper].dataset.songName;
				duration.innerHTML = songlist[i + oper].dataset.songLength;
				audioObj.play();
				audioObj1.pause();
				audioObj2.pause();
				audioObj3.pause();
				audioObj4.pause();
				btn1.classList.remove("stop");
				btn1.classList.add("play");
				btn2.classList.remove("stop");
				btn2.classList.add("play");
				btn3.classList.remove("stop");
				btn3.classList.add("play");
				btn4.classList.remove("stop");
				btn4.classList.add("play");
					console.log(songname.innerHTML,songlist[i].dataset.songName)
				break;

			}
		}
	}

}

function playBtnHandler(that, audioObj, audioObj1, audioObj2, audioObj3, audioObj4, btn1, btn2, btn3, btn4) {
	that.classList.toggle("stop");
	that.classList.toggle("play");
	if (that.classList[1] == "stop") {
		audioObj.play();
		audioObj1.pause();
		audioObj2.pause();
		audioObj3.pause();
		audioObj4.pause();
		btn1.classList.remove("stop");
		btn1.classList.add("play");
		btn2.classList.remove("stop");
		btn2.classList.add("play");
		btn3.classList.remove("stop");
		btn3.classList.add("play");
		btn4.classList.remove("stop");
		btn4.classList.add("play");

	}
	if (that.classList[1] == "play") {
		audioObj.pause();
	}
}


function liOnClickHandler(that, target, audioObj, audioObj1, audioObj2, audioObj3, audioObj4, songname, duration, imgblock, btn, btn1, btn2, btn3, btn4) {
	while (target != that) {
		if (target.tagName == "LI") {
			audioObj.src = target.dataset.song;
			songname.innerHTML = target.dataset.songName;
			duration.innerHTML = target.dataset.songLength;
			if (target.dataset.img) {
				imgblock.style.backgroundImage = "url(" + target.dataset.img + ")"
			};
			btn.classList.remove("play");
			btn.classList.add("stop");
			btn1.classList.remove("stop");
			btn1.classList.add("play");
			btn2.classList.remove("stop");
			btn2.classList.add("play");
			btn3.classList.remove("stop");
			btn3.classList.add("play");
			btn4.classList.remove("stop");
			btn4.classList.add("play");
		}
		target = target.parentNode;
	};

	audioObj.play();
	audioObj1.pause();
	audioObj2.pause();
	audioObj3.pause();
	audioObj4.pause();

}

playBtn1.onclick = function () {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	playBtnHandler(this, audio1, audio2, audio3, audio4, audio5, playBtn2, playBtn3, playBtn4, playBtn5)

};
playBtn2.onclick = function () {
	watcherMinutesSeconds(duration2, progressLine2, progress2, audio2, minutes2, seconds2);
	playBtnHandler(this, audio2, audio1, audio3, audio4, audio5, playBtn1, playBtn3, playBtn4, playBtn5)
}
playBtn3.onclick = function () {
	watcherMinutesSeconds(duration3, progressLine3, progress3, audio3, minutes3, seconds3);
	playBtnHandler(this, audio3, audio2, audio1, audio4, audio5, playBtn2, playBtn1, playBtn4, playBtn5)
}
playBtn4.onclick = function () {
	watcherMinutesSeconds(duration4, progressLine4, progress4, audio4, minutes4, seconds4);
	playBtnHandler(this, audio4, audio2, audio1, audio3, audio5, playBtn2, playBtn1, playBtn3, playBtn5)
}
playBtn5.onclick = function () {
	watcherMinutesSeconds(duration5, progressLine5, progress5, audio5, minutes5, seconds5);
	playBtnHandler(this, audio5, audio2, audio1, audio3, audio4, playBtn2, playBtn1, playBtn3, playBtn4)
}


btnPrev1.onclick = function () {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	btnPrevNext(playBtn1, playBtn2, playBtn3, playBtn4, playBtn5, -1, songName1, songList1, imgBlock1, duration1, audio1, audio2, audio3, audio4, audio5);
}
btnNext1.onclick = function () {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	btnPrevNext(playBtn1, playBtn2, playBtn3, playBtn4, playBtn5, 1, songName1, songList1, imgBlock1, duration1, audio1, audio2, audio3, audio4, audio5);
}
btnPrev2.onclick = function () {
	watcherMinutesSeconds(duration2, progressLine2, progress2, audio2, minutes2, seconds2);
	btnPrevNext(playBtn2, playBtn1, playBtn3, playBtn4, playBtn5, -1, songName2, songList2, imgBlock2, duration2, audio2, audio1, audio3, audio4, audio5);
}
btnNext2.onclick = function () {
	watcherMinutesSeconds(duration2, progressLine2, progress2, audio2, minutes2, seconds2);
	btnPrevNext(playBtn2, playBtn1, playBtn3, playBtn4, playBtn5, 1, songName2, songList2, imgBlock2, duration2, audio2, audio1, audio3, audio4, audio5);
}

btnPrev3.onclick = function () {
	watcherMinutesSeconds(duration3, progressLine3, progress3, audio3, minutes3, seconds3);
	btnPrevNext(playBtn3, playBtn2, playBtn1, playBtn4, playBtn5, -1, songName3, songList3, imgBlock3, duration3, audio3, audio2, audio1, audio4, audio5);
}
btnNext3.onclick = function () {
	watcherMinutesSeconds(duration3, progressLine3, progress3, audio3, minutes3, seconds3);
	btnPrevNext(playBtn3, playBtn2, playBtn1, playBtn4, playBtn5, 1, songName3, songList3, imgBlock3, duration3, audio3, audio2, audio1, audio4, audio5);
}
btnPrev4.onclick = function () {
	watcherMinutesSeconds(duration4, progressLine4, progress4, audio4, minutes4, seconds4);
	btnPrevNext(playBtn4, playBtn2, playBtn1, playBtn3, playBtn5, -1, songName4, songList4, imgBlock4, duration4, audio4, audio2, audio1, audio3, audio5);
}
btnNext4.onclick = function () {
	watcherMinutesSeconds(duration4, progressLine4, progress4, audio4, minutes4, seconds4);
	btnPrevNext(playBtn4, playBtn2, playBtn1, playBtn3, playBtn5, 1, songName4, songList4, imgBlock4, duration4, audio4, audio2, audio1, audio3, audio5);
}
btnPrev5.onclick = function () {
	watcherMinutesSeconds(duration5, progressLine5, progress5, audio5, minutes5, seconds5);
	btnPrevNext(playBtn5, playBtn2, playBtn1, playBtn3, playBtn4, -1, songName5, songList5, imgBlock5, duration5, audio5, audio2, audio1, audio3, audio4);
}
btnNext5.onclick = function () {
	watcherMinutesSeconds(duration5, progressLine5, progress5, audio5, minutes5, seconds5);
	btnPrevNext(playBtn5, playBtn2, playBtn1, playBtn3, playBtn4, 1, songName5, songList5, imgBlock5, duration5, audio5, audio2, audio1, audio3, audio4);
}







songUL1.onclick = function (e) {
	watcherMinutesSeconds(duration1, progressLine1, progress1, audio1, minutes1, seconds1);
	target = e.target;
	liOnClickHandler(this, target, audio1, audio2, audio3, audio4, audio5, songName1, duration1, imgBlock1, playBtn1, playBtn2, playBtn3, playBtn4, playBtn5);

}

songUL2.onclick = function (e) {
	watcherMinutesSeconds(duration2, progressLine2, progress2, audio2, minutes2, seconds2);
	target = e.target;
	liOnClickHandler(this, target, audio2, audio1, audio3, audio4, audio5, songName2, duration2, imgBlock2, playBtn2, playBtn1, playBtn3, playBtn4, playBtn5);
}
songUL3.onclick = function (e) {
	watcherMinutesSeconds(duration3, progressLine3, progress3, audio3, minutes3, seconds3);
	target = e.target;
	liOnClickHandler(this, target, audio3, audio1, audio2, audio4, audio5, songName3, duration3, imgBlock3, playBtn3, playBtn1, playBtn2, playBtn4, playBtn5);
}
songUL4.onclick = function (e) {
	watcherMinutesSeconds(duration4, progressLine4, progress4, audio4, minutes4, seconds4);
	target = e.target;
	liOnClickHandler(this, target, audio4, audio1, audio2, audio3, audio5, songName4, duration4, imgBlock4, playBtn4, playBtn1, playBtn2, playBtn3, playBtn5);
}
songUL5.onclick = function (e) {
	watcherMinutesSeconds(duration5, progressLine5, progress5, audio5, minutes5, seconds5);
	target = e.target;
	liOnClickHandler(this, target, audio5, audio1, audio2, audio3, audio4, songName5, duration5, imgBlock5, playBtn5, playBtn1, playBtn2, playBtn3, playBtn4);
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
