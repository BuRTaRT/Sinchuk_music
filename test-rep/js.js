var currentSong = document.querySelector(".controls");
var currentSong2 = document.querySelector(".controls2");
var list = document.getElementsByClassName("song-list");
var list2 = document.getElementsByClassName("song-list2");
var songLength = document.getElementsByClassName("song-length");
var imgBlock = document.querySelector(".img-block");
var songname = document.getElementById("song-name");
var songname2 = document.getElementById("song-name2")
var n = document.querySelectorAll(".num");
var trackName = document.querySelectorAll(".track-name");
var trackLength = document.querySelectorAll(".track-length");


for (let i = 0; i < list.length; i++) {
	list[i].onclick = function () {
		songname.innerHTML = trackName[i].textContent;
		currentSong.src = "music/heart/song" + i + ".mp3"
		currentSong.autoplay = "true";
		imgBlock.style.backgroundImage = "url(" + this.dataset.img + ")";
	}
}

for (let i = 0; i < list.length; i++) {
	let audio = new Audio();
	audio.src = "music/heart/song" + i + ".mp3";
	audio.onloadedmetadata = function () {
		let min = (audio.duration / 60).toFixed(0);
		let sec = Math.floor(audio.duration % 60).toFixed(0);
		if (sec < 10) sec = "0" + sec;
		let length = min + ":" + sec;
		trackLength[i].innerHTML = length;
	}
}


