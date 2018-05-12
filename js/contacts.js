
let followBlock = document.querySelector(".follow-us");
let followTop = getComputedStyle(document.querySelector(".follow"));
let socFace = document.querySelector(".social-face");
let step = 70;
followBlock.addEventListener("mouseenter", function () {
	anime({
		targets: ".follow",
		top: 92 + "px",
		easing: 'easeOutCubic',
		duration: 400

	})
	anime({
		targets: ".follow-line",
		width: 200 + "px",
		easing: 'easeOutCubic',
		duration: 400

	})
	anime({
		targets: ".social",
		opacity: 1,
		top: 180 + "px",
		easing: 'easeOutCubic',
		duration: 250

	})
})

followBlock.onmouseleave = function (e) {
	let target = e.target;
	anime({
		targets: ".follow",
		top: 112 + "px",
		easing: 'easeOutCubic',
		duration: 400

	})
	anime({
		targets: ".follow-line",
		width: 0 + "px",
		easing: 'easeOutCubic',
		duration: 400

	})
	anime({
		targets: ".social",
		opacity: 0,
		top: 160 + "px",
		easing: 'easeOutCubic',
		duration: 150

	})
}
