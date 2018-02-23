var videoImgContainer = document.querySelector(".video-img-container");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var pageCounter = document.querySelector(".page-counter");

var i = 0;
if (i == 0) {
	prev.style.visibility = "hidden";
}

next.onclick = function () {
	if (i == 3) {
		videoImgContainer.style.animationName = "click-3360";

		videoImgContainer.style.left = "-3360px";
		i++;
	}

	if (i == 2) {
		videoImgContainer.style.animationName = "click-2520";

		videoImgContainer.style.left = "-2520px";
		i++;
	}
	if (i == 1) {
		videoImgContainer.style.animationName = "click-1680";

		videoImgContainer.style.left = "-1680px";
		i++;
	}
	if (i == 0) {
		videoImgContainer.style.animationName = "click-840";
		videoImgContainer.style.left = "-840px";
		i++;
	}
	if (i > 0) {
		prev.style.visibility = "visible";
	}
	pageCounter.innerHTML = 1 + i + "/6";

}
prev.onclick = function () {

	if (i == 1) {
		videoImgContainer.style.animationName = "click840";
		videoImgContainer.style.left = "0px";
		i--;
	};
	if (i == 2) {
		videoImgContainer.style.animationName = "click1680";
		videoImgContainer.style.left = "-840px";
		i--;
	};
	if (i == 3) {
		videoImgContainer.style.animationName = "click2520";
		videoImgContainer.style.left = "-1680px";
		i--;

	}
	if (i == 4) {
		videoImgContainer.style.animationName = "click3360";
		videoImgContainer.style.left = "-2520px";
		i--;

	}
	if (i < 1) {
		prev.style.visibility = "hidden";
	}
	pageCounter.innerHTML = 1 + i + "/6";
}

var videoImgBlocks = document.querySelectorAll(".video-img");
var videoImg = document.querySelectorAll(".img-block1");
var imgZHover = document.querySelectorAll(".z-hover");
var iframe = document.querySelector(".iframe");
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
for(let i=0;i<imgZHover.length;i++){
	imgZHover[i].onclick = function () {
		console.log(this.dataset.youtube);

		iframe.src = this.dataset.youtube;
		
	
	}
}