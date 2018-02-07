var currentSong = document.querySelector(".controls");
var currentSong2 = document.querySelector(".controls2");
var list = document.getElementsByClassName("song-list");
var list2 = document.getElementsByClassName("song-list2");
var songLength = document.getElementsByClassName("song-length");
var imgBlock = document.querySelector(".img-block");
var songname = document.getElementById("song-name");
var songname2 = document.getElementById("song-name2");



for (let i = 0; i < list.length; i++) {

	list[i].onclick = function () {
		currentSong.src = "music/heart/song" + i + ".mp3";
	}
}

for (let i = 0; i < list.length; i++){
	list[i].addEventListener("click", function () {
		alert(i)}) 
}