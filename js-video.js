var prev1 = document.querySelector(".prev");
var next1 = document.querySelector(".next");
var container = document.querySelector(".video-img-container");
var containerWidth = parseInt(getComputedStyle(container).width);
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

document.onclick = function () {
	let event = new Event("click");
	iframe.dispatchEvent(event);
}
