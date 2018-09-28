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