"use strict";

// text van special class naar rood
let special = document.getElementsByTagName("span");
for (let i = 0; i < special.length; i++) {
	special[i].style.color = "red";
}

// tweede paragraaf onderstrepen
let paragraaf = document.getElementsByTagName("p");
if (paragraaf.length > 1) paragraaf[1].style.textDecoration = "underline";

let count = 0;
for (let i = 0; i < document.querySelectorAll(".special").length; i++) {
	console.log("nice");
	count++;
}

document.getElementById("output").textContent = count;
