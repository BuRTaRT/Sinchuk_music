var prev1 = document.querySelector(".prev");
var next1 = document.querySelector(".next");
var container = document.querySelector(".video-img-container");
var step = 840;
var currentPosition = 0;


prev1.onclick = function () {
	next1.style.visibility = "visible";
	if (currentPosition <= step) {
		this.style.visibility = "hidden";
	}
	if (currentPosition > 0) {
		currentPosition -= step;
		anime({
			targets: ".video-img-container",
			right: currentPosition + "px",
			easing: 'easeOutCubic',
			duration: 500
		})
	}
}


next1.onclick = function () {
	let containerWidth = parseInt(getComputedStyle(container).width);
	prev1.style.visibility = "visible";
	if (currentPosition > containerWidth - (step * 2)) {
		this.style.visibility = "hidden";
	}
	if (currentPosition < containerWidth - step) {
		currentPosition += step;
		anime({
			targets: ".video-img-container",
			right: currentPosition + "px",
			easing: 'easeOutCubic',
			duration: 500

		})
	}
}


var videoImgBlocks = document.querySelectorAll(".video-img");
var videoImg = document.querySelectorAll(".img-block1");
var imgZHover = document.querySelectorAll(".z-hover");
let iframe = document.querySelector(".iframe");


for (let i = 0; i < videoImgBlocks.length; i++) {
	videoImgBlocks[i].onmouseover = function () {
		videoImg[i].style.zIndex = "0";
		imgZHover[i].style.zIndex = "1";

	}
	videoImgBlocks[i].onmouseout = function () {
		videoImg[i].style.zIndex = "1";
		imgZHover[i].style.zIndex = "0";

	}

}
for (let i = 0; i < imgZHover.length; i++) {
	imgZHover[i].onclick = function () {
		iframe.src = this.dataset.youtube;


	}
}



let searchString = document.querySelectorAll(".search-string");

for (let i = 0; i < searchString.length; i++) {
	let forPsevdo = document.querySelectorAll(".for-psevdo");
	searchString[i].onfocus = function () {
		this.style.backgroundColor = "rgba(255,255,255,.1)";
		anime({
			targets: forPsevdo[i],
			left: 17 + "px",
			easing: 'linear',
			duration: 200
		})
		anime({
			targets: this,
			paddingLeft: 22 + "px",
			easing: 'linear',
			duration: 200
		})
	}
	searchString[i].onblur = function () {
		this.style.backgroundColor = "transparent";
		searchString[i].setAttribute("placeholder", "Найти видео");
		anime({
			targets: forPsevdo[i],
			left: -4 + "px",
			easing: 'linear',
			duration: 200
		})
		anime({
			targets: this,
			paddingLeft: 8 + "px",
			easing: 'linear',
			duration: 200
		})
	}

}
