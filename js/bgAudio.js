let musBtn = document.querySelector(".mus-player");
let audio = document.getElementById("bgAudio");
let timer;
audio.currentTime = sessionStorage.getItem("currentTime");
if (sessionStorage.getItem("status") == "play") {
	musBtn.classList = "mus-player-stop";
	audio.play();
	timer = setInterval(function () {
		sessionStorage.setItem("currentTime", audio.currentTime), 250
	})
}

musBtn.onclick = function () {
	musBtn.classList.toggle("mus-player-stop");
	musBtn.classList.toggle("mus-player");
	if (musBtn.classList.contains("mus-player-stop")) {
		audio.play();
		timer = setInterval(function () {
			sessionStorage.setItem("currentTime", audio.currentTime)
		}, 250)
		sessionStorage.setItem("status", "play")

	}
	if (musBtn.classList.contains("mus-player")) {
		audio.pause();
		sessionStorage.setItem("currentTime", audio.currentTime)
		clearInterval(timer);
		sessionStorage.setItem("status", "stop")


	}

}
