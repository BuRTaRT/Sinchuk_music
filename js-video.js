var prev1 = document.querySelector(".prev");
var next1 = document.querySelector(".next");
var container = document.querySelector(".video-img-container");
var containerWidth = parseInt(getComputedStyle(container).width);
var step = 840;
var i = 0;
prev1.onclick = function () {
	if (i < 0) {
		i += step;
		var cssSelector = anime({
			targets: ".video-img-container",
			left: i + "px",
			easing: 'easeOutCubic',
			duration: 500

		})
	}
}
next1.onclick = function () {
	if (i > -containerWidth + step) {
		i -= step;
		var cssSelector = anime({
			targets: ".video-img-container",
			left: i + "px",
			easing: 'easeOutCubic',
			duration: 500

		})
	}

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
		iframe.src = this.dataset.youtube;
		
	
	}
}
